import { emotionCsvData, eventCsvData, optionCsvData } from './static/csv'
import * as Papa from 'papaparse'

type Event = {
  id: string
  title: string
  text: string
  options: string[]
}

type Option = {
  id: string
  title: string
  text: string
  reslutText: string
  emotions: {
    need: string
    get: string
    lost: string
  }
}

type Emotion = {
  id: string
  name: string
}

export const events1: Event[] = []
export const events2: Event[] = []
export const options: Option[] = []
export const emotions: Emotion[] = []

export const readCsvFiles = () => {
  // event.csvの読み込み
  Papa.parse(eventCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const type = row[1]
        const title = row[2]
        const text = row[3]
        const options = [row[4], row[6], row[8]]

        const event: Event = { id, title, text, options }

        if (type === '1') {
          events1.push(event)
        }
        if (type === '2') {
          events2.push(event)
        }
      })
    },
    error: (error: any) => {
      console.error('event.csvの読み込みでエラーが発生しました:', error.message)
    }
  })

  // option.csvの読み込み
  Papa.parse(optionCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const title = row[1]
        const text = row[2]
        const reslutText = row[3]
        const emotions = {
          need: row[4],
          get: row[6],
          lost: row[8]
        }

        const option: Option = { id, title, text, reslutText, emotions }
        options.push(option)
      })
    },
    error: (error: any) => {
      console.error(
        'option.csvの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })

  // emotion.csvの読み込み
  Papa.parse(emotionCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const name = row[1]

        const emotion: Emotion = { id, name }
        emotions.push(emotion)
      })
    },
    error: (error: any) => {
      console.error(
        'emotion.csvの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })
}
