/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar Card = /** @class */ (function () {\n    function Card(cardId, clickCallback) {\n        var _this = this;\n        this.cardElement = document.createElement('div');\n        this.cardElement.id = \"card\".concat(cardId);\n        this.cardElement.classList.add('card');\n        this.clickCallback = clickCallback;\n        this.cardElement.onclick = function () { return _this.handleCardClick(cardId); };\n        var initializedText1 = (0, utils_1.getRandomText)();\n        var initializedText2 = (0, utils_1.getRandomText)();\n        this.cardElement.innerHTML = \"\\n      <div class=\\\"text1\\\">\\n        \".concat(initializedText1, \"\\n      </div>\\n      <div class=\\\"text2\\\">\\n        \").concat(initializedText2, \"\\n      </div>\\n    \");\n    }\n    Card.prototype.getCardElement = function () {\n        return this.cardElement;\n    };\n    Card.prototype.handleCardClick = function (cardId) {\n        // Card がクリックされたときの処理\n        if (this.clickCallback) {\n            this.clickCallback(cardId);\n        }\n    };\n    return Card;\n}());\nexports[\"default\"] = Card;\n\n\n//# sourceURL=webpack:///./src/Card.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/Card.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar dialog_1 = __webpack_require__(/*! ./dialog */ \"./src/dialog.ts\");\n/// <reference types=\"bootstrap\" />\nvar chips = [];\nfunction updateChips(chipType) {\n    chips.push(chipType);\n    diplayChips();\n}\nfunction diplayChips() {\n    var chipContainer = document.getElementById('chipContainer');\n    if (chipContainer) {\n        chipContainer.innerHTML = chips\n            .map(function (chip) { return \"<div class=\\\"chip\\\">\".concat(chip, \"</div>\"); })\n            .join('');\n    }\n}\nfunction handleCardClick(cardId) {\n    var newCardType = (0, utils_1.getRandomCardType)();\n    var cardElement = document.getElementById(\"card\".concat(cardId));\n    console.log('cardElement:', cardElement);\n    if (cardElement) {\n        var newText1 = (0, utils_1.getRandomText)();\n        var newText2 = (0, utils_1.getRandomText)();\n        cardElement.innerHTML = \"\\n      <div class=\\\"text1\\\">\\n        \".concat(newText1, \"\\n      </div>\\n      <div class=\\\"text2\\\">\\n        \").concat(newText2, \"\\n      </div>\\n    \");\n        var randomChipType = (0, utils_1.getRandomChipType)();\n        updateChips(randomChipType);\n        (0, dialog_1.showAlert)(\"Card \".concat(cardId, \" clicked! New card type: \").concat(newCardType));\n    }\n}\nfunction initializeCards() {\n    for (var i = 1; i <= 3; i++) {\n        var card = new Card_1.default(i, handleCardClick);\n        var cardContainer = document.getElementById('cardContainer');\n        if (cardContainer) {\n            cardContainer.appendChild(card.getCardElement());\n        }\n    }\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n    initializeCards();\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/dialog.ts":
/*!***********************!*\
  !*** ./src/dialog.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showAlert = void 0;\n// ダイアログを表示する関数\nfunction showAlert(message) {\n    // Bootstrap Modalをトリガー\n    $('#myModal').modal('show');\n    // モーダル内のメッセージを設定\n    $('#modalMessage').text(message);\n}\nexports.showAlert = showAlert;\n\n\n//# sourceURL=webpack:///./src/dialog.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRandomText = exports.getRandomChipType = exports.getRandomCardType = void 0;\nvar cardTypes = ['A', 'B', 'C'];\nfunction getRandomCardType() {\n    var randomIndex = Math.floor(Math.random() * cardTypes.length);\n    return cardTypes[randomIndex];\n}\nexports.getRandomCardType = getRandomCardType;\nfunction getRandomChipType() {\n    var randomChip = Math.floor(Math.random() * 10) + 1;\n    return randomChip;\n}\nexports.getRandomChipType = getRandomChipType;\nfunction getRandomText() {\n    var texts = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];\n    var randomIndex = Math.floor(Math.random() * texts.length);\n    return texts[randomIndex];\n}\nexports.getRandomText = getRandomText;\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;