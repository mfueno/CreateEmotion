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

    this.cardElement.onclick = () =>
      cardConstructor.disabled
        ? {}
        : this.handleCardClick(cardConstructor.cardId)

    this.cardElement.innerHTML = `
      <div class="cardTitle">
        ${cardConstructor.title}
      </div>
      <div class="cardText">
        ${cardConstructor.text}
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
