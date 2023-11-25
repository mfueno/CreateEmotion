import { Option } from './types'

export default class Card {
  private cardElement: HTMLElement
  private clickCallback: (cardId: string) => void

  constructor(
    cardId: string,
    title: string,
    text: string,
    clickCallback: (cardId: string) => void,
    disabled?: boolean
  ) {
    this.cardElement = document.createElement('div')
    this.cardElement.id = `card${cardId}`
    this.cardElement.classList.add('card')
    if (disabled) {
      this.cardElement.classList.add('disabled')
    }
    this.clickCallback = clickCallback

    this.cardElement.onclick = () =>
      disabled ? {} : this.handleCardClick(cardId)

    this.cardElement.innerHTML = `
      <div class="cardTitle">
        ${title}
      </div>
      <div class="cardText">
        ${text}
      </div>
    `
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
