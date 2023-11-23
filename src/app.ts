import Card from './Card'
import { getRandomEvent, getOptions, getEmotion, checkCondition } from './utils'
import { showResultDialog } from './dialog'
import {
  Emotion,
  Event,
  Option,
  Events,
  Options,
  readCsvFiles
} from './csvLoader'

/// <reference types="bootstrap" />

let inLab: boolean = true
let count: number = 0

export type EmotionWithCount = {
  emotion: Emotion
  count: number
}
let senseOfValues: EmotionWithCount[] = []

function updateHeader() {
  const headerElement = document.getElementById('header')
  if (headerElement) {
    count += 1
    let headerText: string = `${inLab ? '実験室' : '社会'} - (${count}/5)`
    headerElement.textContent = headerText
  }
}

function addEmotion(emotion: Emotion) {
  const index = senseOfValues.findIndex((i) => i.emotion.id === emotion.id)
  if (index === -1) {
    senseOfValues.push({ emotion: emotion, count: 1 })
  } else {
    const newCount = senseOfValues[index].count + 1
    senseOfValues[index] = { emotion: emotion, count: newCount }
  }
}

function removeEmotion(id: string) {
  const index = senseOfValues.findIndex((i) => i.emotion.id === id)

  if (index !== -1) {
    const currentCount = senseOfValues[index].count
    if (currentCount === 1) {
      senseOfValues.splice(index, 1)
    } else {
      senseOfValues[index].count += 1
    }
  }
}

function updateSenseOfValues(option: Option) {
  const get = getEmotion(option.emotions.get)
  if (get) {
    addEmotion(get)
  }
  const lost = option.emotions.lost
  if (lost !== '') {
    removeEmotion(lost)
  }

  displaySenseOfValues()
}

function displaySenseOfValues() {
  const chipContainer = document.getElementById('chipContainer')
  if (chipContainer) {
    chipContainer.innerHTML = senseOfValues
      .map(
        (i) =>
          `<div class="chip${i.count < 3 ? i.count : 3}">${i.emotion.name} ${
            i.count > 1 ? `+${i.count - 1}` : ''
          }</div>`
      )
      .join('')
  }
}

function updateEvent(event: Event) {
  const eventElement = document.getElementById('event')
  if (eventElement) {
    eventElement.dataset.eventId = event.id

    const eventTitleElement = eventElement.querySelector('.eventTitle')
    if (eventTitleElement) {
      eventTitleElement.textContent = event.title
    }
    const eventTextElement = eventElement.querySelector('.eventText')
    if (eventTextElement) {
      eventTextElement.textContent = event.text
    }
  }
}

function updateCards(event: Event) {
  const newOptions = getOptions(event)

  const cardContainer = document.getElementById('cardContainer')
  if (cardContainer) {
    cardContainer.innerHTML = ''
  }

  newOptions.map((option) => {
    const card = new Card(
      option.id,
      option,
      handleCardClick,
      checkCondition(option, senseOfValues)
    )
    const cardContainer = document.getElementById('cardContainer')
    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  })
}

function handleCardClick(optionId: string) {
  const cardElement = document.getElementById(`card${optionId}`)

  if (cardElement) {
    const selectedOption = Options.find((option) => option.id === optionId)!
    const resultText = selectedOption.reslutText
    const resultEmotion = getEmotion(selectedOption.emotions.get)

    showResultDialog(resultText, resultEmotion)

    const eventType = inLab ? '1' : '2'
    const newEvent = getRandomEvent(eventType)

    updateSenseOfValues(Options.find((option) => option.id === optionId)!)
    updateHeader()
    updateEvent(newEvent)
    updateCards(newEvent)
  }
}

function initialize() {
  const event = getRandomEvent('1')
  updateHeader()
  updateEvent(event)
  updateCards(event)
  senseOfValues = []
}

document.addEventListener('DOMContentLoaded', () => {
  readCsvFiles()
  initialize()
})
