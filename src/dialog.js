"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAlert = void 0;
// ダイアログを表示する関数
function showAlert(message) {
    // Bootstrap Modalをトリガー
    $('#myModal').modal('show');
    // モーダル内のメッセージを設定
    $('#modalMessage').text(message);
}
exports.showAlert = showAlert;
