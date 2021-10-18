"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.zhibolist_longtime = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var UserSchema = new Schema({
    zhiboid: { type: String },
    eid: { type: String },
    name: { type: String },
    time: { type: String }
});
exports.zhibolist_longtime = mongo_1["default"].model('zhibolist_longtime', UserSchema);
