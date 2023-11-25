import { Emotion } from './types'

// ダイアログを表示する関数
export function showResultDialog(
  title: string,
  message: string,
  emotion?: Emotion
) {
  // Bootstrap Modalをトリガー
  $('#resultDialog').modal('show')

  // モーダル内のメッセージを設定
  $('#resultDialogLabel').text(title)
  $('#resultMessage').text(message)

  $('#resultEmotion').text(emotion?.name ?? '')
  $('#resultEmotionMessage').text(emotion ? 'を獲得した！' : '')
}
