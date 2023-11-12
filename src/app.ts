import Card from './Card'
import { getRandomEvent, getOptions, getEmotion } from './utils'
import { showAlert } from './dialog'
import {
  Emotion,
  Event,
  Option,
  events,
  options,
  readCsvFiles
} from './csvLoader'

/// <reference types="bootstrap" />

let inLab: boolean = true

let senseOfValues: Emotion[] = []

function addEmotion(emotion: Emotion) {
  senseOfValues.push(emotion)
}

function removeEmotion(id: string) {
  const index = senseOfValues.findIndex((emotion) => emotion.id === id)
  if (index !== -1) {
    senseOfValues.splice(index, 1)
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
      .map((emotion) => `<div class="chip">${emotion.name}</div>`)
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
    const card = new Card(option.id, option, handleCardClick)
    const cardContainer = document.getElementById('cardContainer')
    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  })
}

function handleCardClick(optionId: string) {
  const cardElement = document.getElementById(`card${optionId}`)

  if (cardElement) {
    const eventType = inLab ? '1' : '2'
    const newEvent = getRandomEvent(eventType)

    showAlert(`Card ${optionId} clicked!`)

    updateSenseOfValues(options.find((option) => option.id === optionId)!)
    updateEvent(newEvent)
    updateCards(newEvent)
  }
}

function initialize() {
  const event = getRandomEvent('1')
  updateEvent(event)
  updateCards(event)
  senseOfValues = []
}

document.addEventListener('DOMContentLoaded', () => {
  readCsvFiles()
  initialize()
})
