import {
  conditionCsvData,
  emotionCsvData,
  eventCsvData,
  optionCsvData
} from './static/csv'
import * as Papa from 'papaparse'
import { Event, Option, Condition, Emotion } from './types'

export const Events: Event[] = []
export const Options: Option[] = []
export const Conditions: Condition[] = []
export const Emotions: Emotion[] = []

export const readCsvFiles = () => {
  // eventCsvDataの読み込み
  Papa.parse(eventCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const type = row[1]
        const title = row[2]
        const text = row[3]
        const options = [row[4], row[6], row[8]]

        const event: Event = { id, type, title, text, options }

        Events.push(event)
      })
    },
    error: (error: any) => {
      console.error(
        'eventCsvDataの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })

  // optionCsvDataの読み込み
  Papa.parse(optionCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const title = row[1]
        const text = row[2]
        const reslutText = row[3]
        const conditionKey = row[4]
        const emotions = {
          get: row[5],
          lost: row[7]
        }

        const option: Option = {
          id,
          title,
          text,
          reslutText,
          conditionKey,
          emotions
        }
        Options.push(option)
      })
    },
    error: (error: any) => {
      console.error(
        'optionCsvDataの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })

  // conditionCsvDataの読み込み
  Papa.parse(conditionCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const key = row[0]
        const ok = row[1]
        const ng = row[2]

        const condition: Condition = { key, ok, ng }
        Conditions.push(condition)
      })
    },
    error: (error: any) => {
      console.error(
        'conditionCsvDataの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })

  // emotionCsvDataの読み込み
  Papa.parse(emotionCsvData, {
    skipEmptyLines: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const id = row[0]
        const name = row[1]
        const edTitle = row[2]
        const edText = row[3]

        const emotion: Emotion = { id, name, edTitle, edText }
        Emotions.push(emotion)
      })
    },
    error: (error: any) => {
      console.error(
        'emotionCsvDataの読み込みでエラーが発生しました:',
        error.message
      )
    }
  })
}
