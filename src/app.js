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
var inLab = true;
var count = 0;
var senseOfValues = [];
function updateHeader() {
    var headerElement = document.getElementById('header');
    if (headerElement) {
        count += 1;
        var headerText = "".concat(inLab ? '実験室' : '社会', " - (").concat(count, "/5)");
        headerElement.textContent = headerText;
    }
}
function addEmotion(emotion) {
    var index = senseOfValues.findIndex(function (i) { return i.emotion.id === emotion.id; });
    if (index === -1) {
        senseOfValues.push({ emotion: emotion, count: 1 });
    }
    else {
        var newCount = senseOfValues[index].count + 1;
        senseOfValues[index] = { emotion: emotion, count: newCount };
    }
}
function removeEmotion(id) {
    var index = senseOfValues.findIndex(function (i) { return i.emotion.id === id; });
    if (index !== -1) {
        var currentCount = senseOfValues[index].count;
        if (currentCount === 1) {
            senseOfValues.splice(index, 1);
        }
        else {
            senseOfValues[index].count += 1;
        }
    }
}
function updateSenseOfValues(option) {
    var get = (0, utils_1.getEmotion)(option.emotions.get);
    if (get) {
        addEmotion(get);
    }
    var lost = option.emotions.lost;
    if (lost !== '') {
        removeEmotion(lost);
    }
    displaySenseOfValues();
}
function displaySenseOfValues() {
    var chipContainer = document.getElementById('chipContainer');
    if (chipContainer) {
        chipContainer.innerHTML = senseOfValues
            .map(function (i) {
            return "<div class=\"chip".concat(i.count < 3 ? i.count : 3, "\">").concat(i.emotion.name, " ").concat(i.count > 1 ? "+".concat(i.count - 1) : '', "</div>");
        })
            .join('');
    }
}
function updateEvent(event) {
    var eventElement = document.getElementById('event');
    if (eventElement) {
        eventElement.dataset.eventId = event.id;
        var eventTitleElement = eventElement.querySelector('.eventTitle');
        if (eventTitleElement) {
            eventTitleElement.textContent = event.title;
        }
        var eventTextElement = eventElement.querySelector('.eventText');
        if (eventTextElement) {
            eventTextElement.textContent = event.text;
        }
    }
}
function updateCards(event) {
    var newOptions = (0, utils_1.getOptions)(event);
    var cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
        cardContainer.innerHTML = '';
    }
    newOptions.map(function (option) {
        var card = new Card_1.default(option.id, option, handleCardClick);
        var cardContainer = document.getElementById('cardContainer');
        if (cardContainer) {
            cardContainer.appendChild(card.getCardElement());
        }
    });
}
function handleCardClick(optionId) {
    var cardElement = document.getElementById("card".concat(optionId));
    if (cardElement) {
        var selectedOption = csvLoader_1.options.find(function (option) { return option.id === optionId; });
        var resultText = selectedOption.reslutText;
        var resultEmotion = (0, utils_1.getEmotion)(selectedOption.emotions.get);
        (0, dialog_1.showResultDialog)(resultText, resultEmotion);
        var eventType = inLab ? '1' : '2';
        var newEvent = (0, utils_1.getRandomEvent)(eventType);
        updateSenseOfValues(csvLoader_1.options.find(function (option) { return option.id === optionId; }));
        updateHeader();
        updateEvent(newEvent);
        updateCards(newEvent);
    }
}
function initialize() {
    var event = (0, utils_1.getRandomEvent)('1');
    updateHeader();
    updateEvent(event);
    updateCards(event);
    senseOfValues = [];
}
document.addEventListener('DOMContentLoaded', function () {
    (0, csvLoader_1.readCsvFiles)();
    initialize();
});
