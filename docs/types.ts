export type Event = {
  id: string
  type: string
  title: string
  text: string
  options: string[]
}

export type Option = {
  id: string
  title: string
  text: string
  reslutText: string
  conditionKey: string
  emotions: {
    get: string
    lost: string
  }
}

export type Condition = {
  key: string
  ok: string
  ng: string
}

export type Emotion = {
  id: string
  name: string
  edTitle: string
  edText: string
}

export type EmotionWithCount = {
  emotion: Emotion
  count: number
}
