import Card from './Card'
import { getRandomCardType, getRandomChipType, getRandomText } from './utils'
import { showAlert } from './dialog'
import { readCsvFiles } from './csvLoader'

/// <reference types="bootstrap" />

let chips: number[] = []

function updateChips(chipType: number) {
  chips.push(chipType)
  diplayChips()
}

function diplayChips() {
  const chipContainer = document.getElementById('chipContainer')
  if (chipContainer) {
    chipContainer.innerHTML = chips
      .map((chip) => `<div class="chip">${chip}</div>`)
      .join('')
  }
}

function handleCardClick(cardId: number) {
  const newCardType = getRandomCardType()
  const cardElement = document.getElementById(`card${cardId}`)
  console.log('cardElement:', cardElement)

  if (cardElement) {
    const newText1 = getRandomText()
    const newText2 = getRandomText()

    cardElement.innerHTML = `
      <div class="text1">
        ${newText1}
      </div>
      <div class="text2">
        ${newText2}
      </div>
    `

    cardElement.dataset.optionId = '2'

    const randomChipType = getRandomChipType()

    updateChips(randomChipType)

    showAlert(`Card ${cardId} clicked! New card type: ${newCardType}`)
  }
}

function initializeCards() {
  for (let i = 1; i <= 3; i++) {
    const card = new Card(i, '1', handleCardClick)
    const cardContainer = document.getElementById('cardContainer')

    if (cardContainer) {
      cardContainer.appendChild(card.getCardElement())
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  readCsvFiles()
  initializeCards()
})
