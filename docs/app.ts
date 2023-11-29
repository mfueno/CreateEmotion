import Card from './Card'
import {
  getRandomEvent,
  getOptions,
  getEmotion,
  checkCondition,
  generateEmotions,
  getConditionName
} from './utils'
import { showResultDialog } from './dialog'
import { Options, readCsvFiles } from './csvLoader'
import { Emotion, Option, EmotionWithCount, CardConstructor } from './types'
import {
  BirthEvent,
  ClearEvent,
  GameOverOption,
  GameOverResult,
  HalfwayEvent,
  InLabAdditionalCount,
  InLabCount,
  NomalResultTitle,
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
 * ヘッダテキストを書き換える
 */
function updateHeader(text: string) {
  const headerElement = document.getElementById('header')
  if (headerElement) {
    headerElement.textContent = text
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
 * イベントを更新する
 */
function updateEvent(title: string, text: string) {
  const eventElement = document.getElementById('event')
  if (eventElement) {
    const eventTitleElement = eventElement.querySelector('.eventTitle')
    if (eventTitleElement) {
      eventTitleElement.textContent = title
    }
    const eventTextElement = eventElement.querySelector('.eventText')
    if (eventTextElement) {
      eventTextElement.textContent = text
    }
  }
}

/**
 * イベントに従って選択肢カードを生成する
 */
function updateCards(cardConstructors: CardConstructor[]) {
  const cardContainer = document.getElementById('cardContainer')
  if (cardContainer) {
    cardContainer.innerHTML = ''

    cardConstructors.map((cardConstructor) => {
      const card = new Card(cardConstructor)
      cardContainer.appendChild(card.getCardElement())
    })
  }
}

/**
 * フラグを確認して処理を振り分ける
 */
function checkStage() {
  if (senseOfValues.some((i) => i.count > 3)) {
    const emotionId = senseOfValues.find((i) => i.count > 3)!.emotion.id
    // ゲームオーバーイベントを発生
    generateGameOverEvent(emotionId)
  } else if (
    inLab &&
    count >= (additional ? InLabAdditionalCount : InLabCount)
  ) {
    // 中間地点イベントを発生
    generateHalfwayEvent()
  } else if (!inLab && count >= SocialCount) {
    // クリアイベントを発生
    generateClearEvent()
  } else {
    // 通常のイベントを発生
    generateNomalEvent()
  }
}

/**
 * 開始時のイベントを発生させる
 */
function generateBirthEvent() {
  // ヘッダの更新
  updateHeader('実験室')

  // イベントの更新
  updateEvent(BirthEvent.title, BirthEvent.text)

  // カードの更新
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
    showResultDialog(NomalResultTitle, BirthEvent.resultText)
    displaySenseOfValues()
    checkStage()
  }
  const cardConstructors: CardConstructor[] = BirthEvent.options.map(
    (option) => ({
      cardId: option.id,
      title: option.title,
      text: option.text,
      condition: { ok: [], ng: [] },
      clickCallback: handleBirthCardClick
    })
  )
  updateCards(cardConstructors)
}

/**
 * 中間地点のイベントを発生させる
 */
function generateHalfwayEvent() {
  // カウントの更新
  count = 0

  // ヘッダの更新
  updateHeader('実験室 - 選択')

  // イベントの更新
  updateEvent(HalfwayEvent.title, HalfwayEvent.text)

  // カードの更新
  function handleHalfwayCardClick(cardId: string) {
    switch (cardId) {
      case '1':
        inLab = false
        showResultDialog(NomalResultTitle, HalfwayEvent.options[0].resultText)
        break
      case '2':
        const emotion = getEmotion('18')! // 劣等感
        addEmotion(emotion)
        additional = true
        showResultDialog(
          NomalResultTitle,
          HalfwayEvent.options[1].resultText,
          emotion
        )
        break
      default:
        break
    }
    displaySenseOfValues()
    checkStage()
  }
  const cardConstructors: CardConstructor[] = HalfwayEvent.options.map(
    (option) => ({
      cardId: option.id,
      title: option.title,
      text: option.text,
      condition: { ok: [], ng: [] },
      clickCallback: handleHalfwayCardClick
    })
  )
  updateCards(cardConstructors)
}

/**
 * クリアイベントを発生させる
 */
function generateClearEvent() {
  // ヘッダの更新
  updateHeader('実験レポート')

  // イベントの更新
  updateEvent(ClearEvent.title, ClearEvent.text)

  // カードの更新
  function handleClearCardClick() {
    showResultDialog(ClearEvent.result.title, ClearEvent.result.text)
    initialize()
  }
  const cardConstructors: CardConstructor[] = [
    {
      cardId: '1',
      title: ClearEvent.option.title,
      text: ClearEvent.option.text,
      condition: { ok: [], ng: [] },
      clickCallback: handleClearCardClick
    }
  ]
  updateCards(cardConstructors)
}

/**
 * ゲームオーバーイベントを発生させる
 */
function generateGameOverEvent(emotionId: string) {
  // ヘッダの更新
  updateHeader('実験レポート')

  // イベントの更新
  const emotion = getEmotion(emotionId)!
  updateEvent(emotion.edTitle, emotion.edText)

  // カードの更新
  function handleGameOverCardClick(cardId: string) {
    showResultDialog(GameOverResult.title, GameOverResult.text)
    initialize()
  }
  const cardConstructors: CardConstructor[] = [
    {
      cardId: '1',
      title: GameOverOption.title,
      text: GameOverOption.text,
      condition: { ok: [], ng: [] },
      clickCallback: handleGameOverCardClick
    }
  ]
  updateCards(cardConstructors)
}

/**
 * 通常のイベントを発生させる
 */
function generateNomalEvent() {
  // カウントの更新
  count += 1

  // ヘッダの更新
  let maxCount: number = inLab
    ? additional
      ? InLabAdditionalCount
      : InLabCount
    : SocialCount
  let headerText: string = `${
    inLab ? '実験室' : '社会'
  } - (${count}/${maxCount})`
  updateHeader(headerText)

  // イベントの更新
  const eventType = inLab ? '1' : '2'
  const newEvent = getRandomEvent(eventType)
  updateEvent(newEvent.title, newEvent.text)

  // カードの更新
  function handleCardClick(optionId: string) {
    const selectedOption = Options.find((option) => option.id === optionId)!
    const resultText = selectedOption.reslutText
    const resultEmotion = getEmotion(selectedOption.emotions.get)
    showResultDialog(NomalResultTitle, resultText, resultEmotion)
    updateSenseOfValues(Options.find((option) => option.id === optionId)!)
    checkStage()
  }

  const cardConstructors: CardConstructor[] = getOptions(newEvent).map(
    (option) => ({
      cardId: option.id,
      title: option.title,
      text: option.text,
      condition: getConditionName(option.conditionKey),
      clickCallback: handleCardClick,
      disabled: checkCondition(option.conditionKey, senseOfValues)
    })
  )
  updateCards(cardConstructors)
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
  displaySenseOfValues()

  // 開始時のイベントを発生
  generateBirthEvent()
}

document.addEventListener('DOMContentLoaded', () => {
  readCsvFiles()
  initialize()
})
