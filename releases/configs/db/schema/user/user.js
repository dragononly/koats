"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.user = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var UserSchema = new Schema({
    user: { type: String, unique: true, dropDups: true },
    pwd: { type: String },
    zone: { type: String },
    zoneMax: { type: String },
    phone: { type: String, unique: true, sparse: true },
    agio: { type: Object },
    store: { type: String },
    regdate: { type: Date },
    jd: { type: Object },
    skyadmin: { type: String, "default": "user" },
    collect: { type: Object },
    other: { type: Object }
});
exports.user = mongo_1["default"].model('User', UserSchema);
