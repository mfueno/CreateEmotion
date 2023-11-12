"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(cardId, option, clickCallback) {
        var _this = this;
        this.cardElement = document.createElement('div');
        this.cardElement.id = "card".concat(cardId);
        this.cardElement.classList.add('card');
        this.clickCallback = clickCallback;
        this.cardElement.onclick = function () { return _this.handleCardClick(cardId); };
        this.cardElement.innerHTML = "\n      <div class=\"title\">\n        ".concat(option.title, "\n      </div>\n      <div class=\"text\">\n        ").concat(option.text, "\n      </div>\n    ");
    }
    Card.prototype.getCardElement = function () {
        return this.cardElement;
    };
    Card.prototype.handleCardClick = function (cardId) {
        // Card がクリックされたときの処理
        if (this.clickCallback) {
            this.clickCallback(cardId);
        }
    };
    return Card;
}());
exports.default = Card;
