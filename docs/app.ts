import Card from './Card'
import {
  getRandomEvent,
  getOptions,
  getEmotion,
  checkCondition,
  generateEmotions
} from './utils'
import { showResultDialog } from './dialog'
import { Options, readCsvFiles } from './csvLoader'
import { Emotion, Event, Option, EmotionWithCount } from './types'
import {
  BirthEvent,
  HalfwayEvent,
  InLabAdditionalCount,
  InLabCount,
  SocialCount
} from './constants'

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

/**
 * ヘッダテキストを書き換える（特殊イベント以外）
 */
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

/**
 * 感情を追加する
 */
function addEmotion(emotion: Emotion) {
  const index = senseOfValues.findIndex((i) => i.emotion.id === emotion.id)
  if (index === -1) {
    senseOfValues.push({ emotion: emotion, count: 1 })
  } else {
    const newCount = senseOfValues[index].count + 1
    senseOfValues[index] = { emotion: emotion, count: newCount }
  }
}

/**
 * 感情を取り除く
 */
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

/**
 * 感情チップを表示する
 */
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

/**
 * 選んだ選択肢に従って感情を更新する
 */
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

/**
 * イベントを更新する（特殊イベント以外）
 */
function updateEvent(event: Event) {
  const eventElement = document.getElementById('event')
  if (eventElement) {
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

/**
 * イベントに従って選択肢カードを生成する
 */
function updateCards(event: Event) {
  const newOptions = getOptions(event)

  const cardContainer = document.getElementById('cardContainer')
  if (cardContainer) {
    cardContainer.innerHTML = ''
  }

  newOptions.map((option) => {
    const card = new Card(
      option.id,
      option.title,
      option.text,
      handleCardClick,
      checkCondition(option, senseOfValues)
    )
    const cardContainer = document.getElementById('cardContainer')
    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  })
}

/**
 * フラグを確認して処理を振り分ける
 */
function checkStage() {
  if (senseOfValues.some((i) => i.count > 3)) {
    const emotionId = senseOfValues.find((i) => i.count > 3)!
    // TODO: やる
    console.log('感情振り切れエンディング発生')
  } else if (
    inLab &&
    count >= (additional ? InLabAdditionalCount : InLabCount)
  ) {
    generateHalfwayEvent()
  } else if (!inLab && count >= SocialCount) {
    // TODO: やる
    console.log('クリアイベント発生')
  } else {
    const eventType = inLab ? '1' : '2'
    const newEvent = getRandomEvent(eventType)

    updateHeader()
    updateEvent(newEvent)
    updateCards(newEvent)
  }
}

/**
 * カードクリック時の処理を行う（特殊イベント以外）
 */
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

/**
 * 開始時のイベントを発生させる
 */
function generateBirthEvent() {
  // ヘッダの更新
  const headerElement = document.getElementById('header')
  if (headerElement) {
    headerElement.textContent = '実験室'
  }

  // イベントの更新
  const eventElement = document.getElementById('event')
  if (eventElement) {
    const eventTitleElement = eventElement.querySelector('.eventTitle')
    if (eventTitleElement) {
      eventTitleElement.textContent = BirthEvent.title
    }
    const eventTextElement = eventElement.querySelector('.eventText')
    if (eventTextElement) {
      eventTextElement.textContent = BirthEvent.text
    }
  }

  // カードの更新
  const cardContainer = document.getElementById('cardContainer')
  if (cardContainer) {
    cardContainer.innerHTML = ''
  }
  function handleBirthCardClick(cardId: string) {
    let quantity: number = 0
    switch (cardId) {
      case '1':
        quantity = BirthEvent.options[0].quantity
        break
      case '2':
        quantity = BirthEvent.options[1].quantity
        break
      case '3':
        quantity = BirthEvent.options[2].quantity
        break
      default:
        break
    }
    generateEmotions(quantity).map((emotion) => addEmotion(emotion))
    showResultDialog(BirthEvent.resultText)
    displaySenseOfValues()
    checkStage()
  }
  BirthEvent.options.map((option) => {
    const card = new Card(
      option.id,
      option.title,
      option.text,
      handleBirthCardClick
    )
    const cardContainer = document.getElementById('cardContainer')
    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  })
}

/**
 * 中間地点のイベントを発生させる
 */
function generateHalfwayEvent() {
  count = 0

  // ヘッダの更新
  const headerElement = document.getElementById('header')
  if (headerElement) {
    headerElement.textContent = '実験室'
  }

  // イベントの更新
  const eventElement = document.getElementById('event')
  if (eventElement) {
    const eventTitleElement = eventElement.querySelector('.eventTitle')
    if (eventTitleElement) {
      eventTitleElement.textContent = HalfwayEvent.title
    }
    const eventTextElement = eventElement.querySelector('.eventText')
    if (eventTextElement) {
      eventTextElement.textContent = HalfwayEvent.text
    }
  }

  // カードの更新
  const cardContainer = document.getElementById('cardContainer')
  if (cardContainer) {
    cardContainer.innerHTML = ''
  }
  function handleHalfwayCardClick(cardId: string) {
    switch (cardId) {
      case '1':
        inLab = false
        showResultDialog(HalfwayEvent.options[0].resultText)
        break
      case '2':
        const emotion = getEmotion('18')! // 劣等感
        addEmotion(emotion)
        additional = true
        showResultDialog(HalfwayEvent.options[1].resultText, emotion)
        break
      default:
        break
    }
    displaySenseOfValues()
    checkStage()
  }
  HalfwayEvent.options.map((option) => {
    const card = new Card(
      option.id,
      option.title,
      option.text,
      handleHalfwayCardClick
    )
    const cardContainer = document.getElementById('cardContainer')
    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  })
}

/**
 * 初期化処理を行う
 */
function initialize() {
  // パラメータの初期化
  count = 0
  inLab = true
  additional = false
  senseOfValues = []

  generateBirthEvent()
}

document.addEventListener('DOMContentLoaded', () => {
  readCsvFiles()
  initialize()
})
