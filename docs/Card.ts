import { CardConstructor } from './types'

export default class Card {
  private cardElement: HTMLElement
  private clickCallback: (cardId: string) => void

  constructor(cardConstructor: CardConstructor) {
    this.cardElement = document.createElement('div')
    this.cardElement.id = `card${cardConstructor.cardId}`
    this.cardElement.classList.add('card')
    if (cardConstructor.disabled) {
      this.cardElement.classList.add('disabled')
    }
    this.clickCallback = cardConstructor.clickCallback

    // 条件要素の作成
    const conditionElement = document.createElement('div')
    conditionElement.classList.add('conditionContainer')

    const okConditionElement = document.createElement('div')
    okConditionElement.classList.add('condition')
    const okText = `必要: ${cardConstructor.condition.ok.join(', ')}`
    okConditionElement.textContent = okText
    if (cardConstructor.condition.ok.length > 0) {
      conditionElement.appendChild(okConditionElement)
    }

    const ngConditionElement = document.createElement('div')
    ngConditionElement.classList.add('condition')
    const ngText = `禁止: ${cardConstructor.condition.ng.join(', ')}`
    ngConditionElement.textContent = ngText
    if (cardConstructor.condition.ng.length > 0) {
      conditionElement.appendChild(ngConditionElement)
    }

    // タイトル要素の作成
    const titleElement = document.createElement('div')
    titleElement.classList.add('cardTitle')
    titleElement.textContent = cardConstructor.title

    // テキスト要素の作成
    const textElement = document.createElement('div')
    textElement.classList.add('cardText')
    textElement.textContent = cardConstructor.text

    // 要素の階層構造を構築
    this.cardElement.appendChild(conditionElement)
    this.cardElement.appendChild(titleElement)
    this.cardElement.appendChild(textElement)

    // クリックイベントの設定
    this.cardElement.onclick = () =>
      cardConstructor.disabled
        ? {}
        : this.handleCardClick(cardConstructor.cardId)
  }

  public getCardElement(): HTMLElement {
    return this.cardElement
  }

  public handleCardClick(cardId: string) {
    // Card がクリックされたときの処理
    if (this.clickCallback) {
      this.clickCallback(cardId)
    }
  }
}
