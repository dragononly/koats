"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.zhibolist = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var UserSchema = new Schema({
    name: { type: String },
    starttime: { type: Object },
    group: { type: Object },
    power: { type: Object },
    signtime: { type: Object },
    usersign: { type: Object },
    like: { type: Object },
    url: { type: String },
    ask: { type: Array },
    a: { type: Number, "default": 0 },
    b: { type: Number, "default": 0 },
    c: { type: Number, "default": 0 },
    d: { type: Number, "default": 0 }
});
exports.zhibolist = mongo_1["default"].model('zhibolist', UserSchema);
