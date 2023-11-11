"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomText = exports.getRandomChipType = exports.getRandomCardType = void 0;
var cardTypes = ['A', 'B', 'C'];
function getRandomCardType() {
    var randomIndex = Math.floor(Math.random() * cardTypes.length);
    return cardTypes[randomIndex];
}
exports.getRandomCardType = getRandomCardType;
function getRandomChipType() {
    var randomChip = Math.floor(Math.random() * 10) + 1;
    return randomChip;
}
exports.getRandomChipType = getRandomChipType;
function getRandomText() {
    var texts = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
    var randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
exports.getRandomText = getRandomText;
