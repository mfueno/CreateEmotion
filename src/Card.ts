import { getRandomText } from './utils'

export default class Card {
  private cardElement: HTMLElement
  private clickCallback: (cardId: number) => void

  constructor(
    cardId: number,
    optionId: string,
    clickCallback: (cardId: number) => void
  ) {
    this.cardElement = document.createElement('div')
    this.cardElement.id = `card${cardId}`
    this.cardElement.classList.add('card')
    this.cardElement.setAttribute('data-option-id', optionId)
    this.clickCallback = clickCallback

    this.cardElement.onclick = () => this.handleCardClick(cardId)

    const initializedText1 = getRandomText()
    const initializedText2 = getRandomText()

    this.cardElement.innerHTML = `
      <div class="text1">
        ${initializedText1}
      </div>
      <div class="text2">
        ${initializedText2}
      </div>
    `
  }

  public getCardElement(): HTMLElement {
    return this.cardElement
  }

  public handleCardClick(cardId: number) {
    // Card がクリックされたときの処理
    if (this.clickCallback) {
      this.clickCallback(cardId)
    }
  }
}
