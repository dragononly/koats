"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.skyuser = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var UserSchema = new Schema({
    branch: { type: String },
    department: { type: String },
    departmentchild: { type: String },
    name: { type: String },
    eid: { type: Object },
    rank_id: { type: String }
});
exports.skyuser = mongo_1["default"].model('Skyuser', UserSchema);
