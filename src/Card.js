"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Card = /** @class */ (function () {
    function Card(cardId, clickCallback) {
        var _this = this;
        this.cardElement = document.createElement('div');
        this.cardElement.id = "card".concat(cardId);
        this.cardElement.classList.add('card');
        this.clickCallback = clickCallback;
        this.cardElement.onclick = function () { return _this.handleCardClick(cardId); };
        var initializedText1 = (0, utils_1.getRandomText)();
        var initializedText2 = (0, utils_1.getRandomText)();
        this.cardElement.innerHTML = "\n      <div class=\"text1\">\n        ".concat(initializedText1, "\n      </div>\n      <div class=\"text2\">\n        ").concat(initializedText2, "\n      </div>\n    ");
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
