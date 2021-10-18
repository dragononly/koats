"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.test = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var TestSchema = new Schema({
    name: { type: String },
    test: { type: String }
});
exports.test = mongo_1["default"].model('test', TestSchema);
