"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsvFiles = exports.emotions = exports.options = exports.events2 = exports.events1 = void 0;
var csv_1 = require("./static/csv");
var Papa = __importStar(require("papaparse"));
exports.events1 = [];
exports.events2 = [];
exports.options = [];
exports.emotions = [];
var readCsvFiles = function () {
    // event.csvの読み込み
    Papa.parse(csv_1.eventCsvData, {
        skipEmptyLines: true,
        complete: function (result) {
            result.data.forEach(function (row) {
                var id = row[0];
                var type = row[1];
                var title = row[2];
                var text = row[3];
                var options = [row[4], row[6], row[8]];
                var event = { id: id, title: title, text: text, options: options };
                if (type === '1') {
                    exports.events1.push(event);
                }
                if (type === '2') {
                    exports.events2.push(event);
                }
            });
        },
        error: function (error) {
            console.error('event.csvの読み込みでエラーが発生しました:', error.message);
        }
    });
    // option.csvの読み込み
    Papa.parse(csv_1.optionCsvData, {
        skipEmptyLines: true,
        complete: function (result) {
            result.data.forEach(function (row) {
                var id = row[0];
                var title = row[1];
                var text = row[2];
                var reslutText = row[3];
                var emotions = {
                    need: row[4],
                    get: row[6],
                    lost: row[8]
                };
                var option = { id: id, title: title, text: text, reslutText: reslutText, emotions: emotions };
                exports.options.push(option);
            });
        },
        error: function (error) {
            console.error('option.csvの読み込みでエラーが発生しました:', error.message);
        }
    });
    // emotion.csvの読み込み
    Papa.parse(csv_1.emotionCsvData, {
        skipEmptyLines: true,
        complete: function (result) {
            result.data.forEach(function (row) {
                var id = row[0];
                var name = row[1];
                var emotion = { id: id, name: name };
                exports.emotions.push(emotion);
            });
        },
        error: function (error) {
            console.error('emotion.csvの読み込みでエラーが発生しました:', error.message);
        }
    });
};
exports.readCsvFiles = readCsvFiles;
