import { Emotion } from './types'

// ダイアログを表示する関数
export function showResultDialog(message: string, emotion?: Emotion) {
  // Bootstrap Modalをトリガー
  $('#resultDialog').modal('show')

  // モーダル内のメッセージを設定
  $('#resultMessage').text(message)

  $('#resultEmotion').text(emotion?.name ?? '')
  $('#resultEmotionMessage').text(
    emotion ? 'を獲得した！' : '何も獲得できなかった'
  )
}
