const cardTypes: string[] = ['A', 'B', 'C']

export function getRandomCardType(): string {
  const randomIndex = Math.floor(Math.random() * cardTypes.length)
  return cardTypes[randomIndex]
}

export function getRandomChipType() {
  const randomChip = Math.floor(Math.random() * 10) + 1
  return randomChip
}

export function getRandomText() {
  const texts = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']
  const randomIndex = Math.floor(Math.random() * texts.length)
  return texts[randomIndex]
}
