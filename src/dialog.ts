// ダイアログを表示する関数
export function showAlert(message: string) {
  // Bootstrap Modalをトリガー
  $('#myModal').modal('show')

  // モーダル内のメッセージを設定
  $('#modalMessage').text(message)
}
