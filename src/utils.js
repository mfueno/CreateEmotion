"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmotion = exports.getOptions = exports.getRandomEvent = void 0;
var csvLoader_1 = require("./csvLoader");
function getRandomEvent(type) {
    var selectedEvents = csvLoader_1.events.filter(function (event) { return event.type === type; });
    var randomIndex = Math.floor(Math.random() * selectedEvents.length);
    return selectedEvents[randomIndex];
}
exports.getRandomEvent = getRandomEvent;
function getOptions(event) {
    return csvLoader_1.options.filter(function (option) { return event.options.includes(option.id); });
}
exports.getOptions = getOptions;
function getEmotion(id) {
    return csvLoader_1.emotions.find(function (emotion) { return emotion.id === id; });
}
exports.getEmotion = getEmotion;
