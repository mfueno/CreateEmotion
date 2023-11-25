import Card from './Card'
import { getRandomEvent, getOptions, getEmotion, checkCondition } from './utils'
import { showResultDialog } from './dialog'
import { Options, readCsvFiles } from './csvLoader'
import { Emotion, Event, Option, EmotionWithCount } from './types'
import { InLabAdditionalCount, InLabCount, SocialCount } from './constants'

/// <reference types="bootstrap" />

/**
 * 実験室内か
 */
let inLab: boolean = true

/**
 * 追加訓練中か
 */
let additional: boolean = false

/**
 * 現在のステージ内でとった行動回数
 */
let count: number = 0

/**
 * 獲得した感情と重複度
 */
let senseOfValues: EmotionWithCount[] = []

function updateHeader() {
  const headerElement = document.getElementById('header')
  if (headerElement) {
    count += 1
    let totalCount: number = inLab
      ? additional
        ? InLabAdditionalCount
        : InLabCount
      : SocialCount
    let headerText: string = `${
      inLab ? '実験室' : '社会'
    } - (${count}/${totalCount})`
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

function checkStage() {
  if (senseOfValues.some((i) => i.count > 3)) {
    const emotionId = senseOfValues.find((i) => i.count > 3)!
    console.log('感情振り切れエンディング発生')
  } else if (
    inLab &&
    count === (additional ? InLabAdditionalCount : InLabCount)
  ) {
    console.log('巣立ちイベント発生')
  } else if (!inLab && count === SocialCount) {
    console.log('クリアイベント発生')
  } else {
    const eventType = inLab ? '1' : '2'
    const newEvent = getRandomEvent(eventType)

    updateHeader()
    updateEvent(newEvent)
    updateCards(newEvent)
  }
}

function handleCardClick(optionId: string) {
  const cardElement = document.getElementById(`card${optionId}`)

  if (cardElement) {
    const selectedOption = Options.find((option) => option.id === optionId)!
    const resultText = selectedOption.reslutText
    const resultEmotion = getEmotion(selectedOption.emotions.get)

    showResultDialog(resultText, resultEmotion)

    updateSenseOfValues(Options.find((option) => option.id === optionId)!)

    checkStage()
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
