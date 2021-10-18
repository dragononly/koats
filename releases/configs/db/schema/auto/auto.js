"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.auto = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var AutoSchema = new Schema({
    name: { type: Number },
    test: { type: Number },
    arr: { type: Array },
    arr2: { type: Array }
});
exports.auto = mongo_1["default"].model('Auto', AutoSchema);
