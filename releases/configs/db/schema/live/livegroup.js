"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.livegroup = void 0;
var mongo_1 = __importDefault(require("../../mongo"));
var Schema = mongo_1["default"].Schema;
var UserSchema = new Schema({
    branch: { type: Array },
    department: { type: Array },
    departmentchild: { type: Array },
    name: { type: Array },
    groupname: { type: String }
});
exports.livegroup = mongo_1["default"].model('livegroup', UserSchema);
