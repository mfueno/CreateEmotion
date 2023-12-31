import { Emotions, Events, Options, Conditions } from './csvLoader'
import { Event, EmotionWithCount } from './types'

/**
 * 指定したイベントタイプのイベントをランダムに返す
 */
export function getRandomEvent(type: string) {
  const selectedEvents = Events.filter((event) => event.type === type)
  const randomIndex = Math.floor(Math.random() * selectedEvents.length)
  return selectedEvents[randomIndex]
}

/**
 * 指定したイベントの選択肢を列挙する
 */
export function getOptions(event: Event) {
  return Options.filter((option) => event.options.includes(option.id))
}

/**
 * 感情IDから感情を取得する
 */
export function getEmotion(id: string) {
  return Emotions.find((emotion) => emotion.id === id)
}

/**
 * 条件keyからokとngの感情IDを返す
 */
function getCondition(key: string) {
  const conditions = Conditions.filter((condition) => condition.key === key)
  const oks = conditions
    .map((condition) => condition.ok)
    .filter((ok) => ok !== '')
  const ngs = conditions
    .map((condition) => condition.ng)
    .filter((ng) => ng !== '')

  return { ok: oks, ng: ngs }
}

/**
 * 条件keyからokとngの感情名を返す
 */
export function getConditionName(key: string) {
  const condition = getCondition(key)
  const okNames = condition.ok
    .map((id) => getEmotion(id)?.name)
    .filter((i): i is string => i !== undefined)
  const ngNames = condition.ng
    .map((id) => getEmotion(id)?.name)
    .filter((i): i is string => i !== undefined)

  return { ok: okNames, ng: ngNames }
}

/**
 * 所持している感情をもとに指定した選択肢が選択不可能かを判定する
 */
export function checkCondition(
  conditionKey: string,
  senseOfValues: EmotionWithCount[]
) {
  const emotionIds = senseOfValues.map((i) => i.emotion.id)

  return (
    (getCondition(conditionKey).ok.length > 0 &&
      !getCondition(conditionKey).ok.some((ok) => emotionIds.includes(ok))) ||
    getCondition(conditionKey).ng.some((ng) => emotionIds.includes(ng))
  )
}

/**
 * 指定した配列に対してランダムにシャッフルした新しい配列を返す
 */
export function shuffle<T>(array: T[]) {
  let shuffledArray: T[] = [...array]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}

/**
 * 指定した個数の感情をランダムに返す（重複なし）
 */
export function generateEmotions(quantity: number) {
  return shuffle(Emotions).slice(0, quantity)
}
