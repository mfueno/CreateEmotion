"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showResultDialog = void 0;
// ダイアログを表示する関数
function showResultDialog(message, emotion) {
    var _a;
    // Bootstrap Modalをトリガー
    $('#resultDialog').modal('show');
    // モーダル内のメッセージを設定
    $('#resultMessage').text(message);
    $('#resultEmotion').text((_a = emotion === null || emotion === void 0 ? void 0 : emotion.name) !== null && _a !== void 0 ? _a : '');
    $('#resultEmotionMessage').text(emotion ? 'を獲得した！' : '何も獲得できなかった');
}
exports.showResultDialog = showResultDialog;
