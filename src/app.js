"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
var utils_1 = require("./utils");
var dialog_1 = require("./dialog");
var csvLoader_1 = require("./csvLoader");
/// <reference types="bootstrap" />
var chips = [];
function updateChips(chipType) {
    chips.push(chipType);
    diplayChips();
}
function diplayChips() {
    var chipContainer = document.getElementById('chipContainer');
    if (chipContainer) {
        chipContainer.innerHTML = chips
            .map(function (chip) { return "<div class=\"chip\">".concat(chip, "</div>"); })
            .join('');
    }
}
function updateEvent(eventId) {
    var eventElement = document.getElementById('event');
    if (eventElement) {
        eventElement.dataset.eventId = eventId;
        var newTitle = (0, utils_1.getRandomText)();
        var newText = (0, utils_1.getRandomText)();
        eventElement.innerHTML = "\n      <div class=\"eventTitle\">\n        ".concat(newTitle, "\n      </div>\n      <div class=\"eventText\">\n        ").concat(newText, "\n      </div>\n    ");
    }
}
function handleCardClick(cardId) {
    var newCardType = (0, utils_1.getRandomCardType)();
    var cardElement = document.getElementById("card".concat(cardId));
    if (cardElement) {
        var newEventId = (0, utils_1.getRandomText)();
        cardElement.dataset.optionId = '2';
        var newText1 = (0, utils_1.getRandomText)();
        var newText2 = (0, utils_1.getRandomText)();
        cardElement.innerHTML = "\n      <div class=\"text1\">\n        ".concat(newText1, "\n      </div>\n      <div class=\"text2\">\n        ").concat(newText2, "\n      </div>\n    ");
        var randomChipType = (0, utils_1.getRandomChipType)();
        updateChips(randomChipType);
        updateEvent(newEventId);
        (0, dialog_1.showAlert)("Card ".concat(cardId, " clicked! New card type: ").concat(newCardType));
    }
}
function initializeCards() {
    for (var i = 1; i <= 3; i++) {
        var card = new Card_1.default(i, '1', handleCardClick);
        var cardContainer = document.getElementById('cardContainer');
        if (cardContainer) {
            cardContainer.appendChild(card.getCardElement());
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    (0, csvLoader_1.readCsvFiles)();
    initializeCards();
    updateEvent('');
});
