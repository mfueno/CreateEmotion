import { Event, emotions, events, options } from './csvLoader'

export function getRandomEvent(type: string) {
  const selectedEvents = events.filter((event) => event.type === type)
  const randomIndex = Math.floor(Math.random() * selectedEvents.length)
  return selectedEvents[randomIndex]
}

export function getOptions(event: Event) {
  return options.filter((option) => event.options.includes(option.id))
}

export function getEmotion(id: string) {
  return emotions.find((emotion) => emotion.id === id)
}
