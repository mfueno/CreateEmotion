import { Emotions, Events, Options, Conditions } from './csvLoader'
import { Event, Option, EmotionWithCount } from './types'

export function getRandomEvent(type: string) {
  const selectedEvents = Events.filter((event) => event.type === type)
  const randomIndex = Math.floor(Math.random() * selectedEvents.length)
  return selectedEvents[randomIndex]
}

export function getOptions(event: Event) {
  return Options.filter((option) => event.options.includes(option.id))
}

export function getEmotion(id: string) {
  return Emotions.find((emotion) => emotion.id === id)
}

export function checkCondition(
  option: Option,
  senseOfValues: EmotionWithCount[]
) {
  const conditionKey = option.conditionKey
  const conditions = Conditions.filter(
    (condition) => condition.key === conditionKey
  )
  const oks = conditions
    .map((condition) => condition.ok)
    .filter((ok) => ok !== '')
  const ngs = conditions
    .map((condition) => condition.ng)
    .filter((ng) => ng !== '')

  const emotionIds = senseOfValues.map((i) => i.emotion.id)

  return (
    oks.some((ok) => emotionIds.includes(ok)) &&
    !ngs.some((ng) => emotionIds.includes(ng))
  )
}
