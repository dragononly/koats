"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AutoController = void 0;
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var auto_1 = require("../../../configs/db/schema/auto/auto");
var test_1 = require("../../../configs/db/schema/auto/test");
var livegroup_1 = require("../../../configs/db/schema/live/livegroup");
var message_1 = require("../../../configs/db/schema/live/message");
var skyuser_1 = require("../../../configs/db/schema/live/skyuser");
var zhibolist_1 = require("../../../configs/db/schema/live/zhibolist");
var zhibolist_longtime_1 = require("../../../configs/db/schema/live/zhibolist_longtime");
var user_1 = require("../../../configs/db/schema/user/user");
var AutoController = (function () {
    function AutoController() {
    }
    AutoController.prototype.autoget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_1, i, error_1, error_2, error_3, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            i = arr_1[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, auto_1.auto.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, auto_1.auto.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_2 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, auto_1.auto.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_3 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, auto_1.auto.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_4 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.autopost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new auto_1.auto(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.autoput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_2, i, mi, mi, obj2, arr, _a, arr_3, i, mi, mi, obj2, arr, _b, arr_4, i, mi, mi, obj2, arr, _c, arr_5, i, mi, mi, obj2, arr, _d, arr_6, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                                i = arr_2[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, auto_1.auto.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_3 = arr; _a < arr_3.length; _a++) {
                                i = arr_3[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, auto_1.auto.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_4 = arr; _b < arr_4.length; _b++) {
                                i = arr_4[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, auto_1.auto.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_5 = arr; _c < arr_5.length; _c++) {
                                i = arr_5[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, auto_1.auto.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_6 = arr; _d < arr_6.length; _d++) {
                                i = arr_6[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, auto_1.auto.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, auto_1.auto.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.autoremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, auto_1.auto.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.testget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_7, i, error_5, error_6, error_7, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_7 = arr; _i < arr_7.length; _i++) {
                            i = arr_7[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, test_1.test.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_5 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, test_1.test.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_6 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, test_1.test.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_7 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, test_1.test.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_8 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.testpost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new test_1.test(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.testput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_8, i, mi, mi, obj2, arr, _a, arr_9, i, mi, mi, obj2, arr, _b, arr_10, i, mi, mi, obj2, arr, _c, arr_11, i, mi, mi, obj2, arr, _d, arr_12, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_8 = arr; _i < arr_8.length; _i++) {
                                i = arr_8[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, test_1.test.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_9 = arr; _a < arr_9.length; _a++) {
                                i = arr_9[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, test_1.test.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_10 = arr; _b < arr_10.length; _b++) {
                                i = arr_10[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, test_1.test.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_11 = arr; _c < arr_11.length; _c++) {
                                i = arr_11[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, test_1.test.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_12 = arr; _d < arr_12.length; _d++) {
                                i = arr_12[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, test_1.test.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, test_1.test.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.testremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, test_1.test.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.livegroupget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_13, i, error_9, error_10, error_11, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_13 = arr; _i < arr_13.length; _i++) {
                            i = arr_13[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, livegroup_1.livegroup.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_9 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, livegroup_1.livegroup.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_10 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, livegroup_1.livegroup.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_11 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, livegroup_1.livegroup.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_12 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.livegrouppost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new livegroup_1.livegroup(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.livegroupput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_14, i, mi, mi, obj2, arr, _a, arr_15, i, mi, mi, obj2, arr, _b, arr_16, i, mi, mi, obj2, arr, _c, arr_17, i, mi, mi, obj2, arr, _d, arr_18, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_14 = arr; _i < arr_14.length; _i++) {
                                i = arr_14[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, livegroup_1.livegroup.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_15 = arr; _a < arr_15.length; _a++) {
                                i = arr_15[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, livegroup_1.livegroup.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_16 = arr; _b < arr_16.length; _b++) {
                                i = arr_16[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, livegroup_1.livegroup.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_17 = arr; _c < arr_17.length; _c++) {
                                i = arr_17[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, livegroup_1.livegroup.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_18 = arr; _d < arr_18.length; _d++) {
                                i = arr_18[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, livegroup_1.livegroup.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, livegroup_1.livegroup.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.livegroupremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, livegroup_1.livegroup.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.messageget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_19, i, error_13, error_14, error_15, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_19 = arr; _i < arr_19.length; _i++) {
                            i = arr_19[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, message_1.message.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_13 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, message_1.message.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_14 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, message_1.message.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_15 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, message_1.message.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_16 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.messagepost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new message_1.message(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.messageput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_20, i, mi, mi, obj2, arr, _a, arr_21, i, mi, mi, obj2, arr, _b, arr_22, i, mi, mi, obj2, arr, _c, arr_23, i, mi, mi, obj2, arr, _d, arr_24, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_20 = arr; _i < arr_20.length; _i++) {
                                i = arr_20[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, message_1.message.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_21 = arr; _a < arr_21.length; _a++) {
                                i = arr_21[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, message_1.message.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_22 = arr; _b < arr_22.length; _b++) {
                                i = arr_22[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, message_1.message.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_23 = arr; _c < arr_23.length; _c++) {
                                i = arr_23[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, message_1.message.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_24 = arr; _d < arr_24.length; _d++) {
                                i = arr_24[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, message_1.message.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, message_1.message.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.messageremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, message_1.message.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.skyuserget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_25, i, error_17, error_18, error_19, error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_25 = arr; _i < arr_25.length; _i++) {
                            i = arr_25[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, skyuser_1.skyuser.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_17 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, skyuser_1.skyuser.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_18 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, skyuser_1.skyuser.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_19 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, skyuser_1.skyuser.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_20 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.skyuserpost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new skyuser_1.skyuser(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.skyuserput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_26, i, mi, mi, obj2, arr, _a, arr_27, i, mi, mi, obj2, arr, _b, arr_28, i, mi, mi, obj2, arr, _c, arr_29, i, mi, mi, obj2, arr, _d, arr_30, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_26 = arr; _i < arr_26.length; _i++) {
                                i = arr_26[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, skyuser_1.skyuser.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_27 = arr; _a < arr_27.length; _a++) {
                                i = arr_27[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, skyuser_1.skyuser.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_28 = arr; _b < arr_28.length; _b++) {
                                i = arr_28[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, skyuser_1.skyuser.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_29 = arr; _c < arr_29.length; _c++) {
                                i = arr_29[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, skyuser_1.skyuser.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_30 = arr; _d < arr_30.length; _d++) {
                                i = arr_30[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, skyuser_1.skyuser.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, skyuser_1.skyuser.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.skyuserremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolistget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_31, i, error_21, error_22, error_23, error_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_31 = arr; _i < arr_31.length; _i++) {
                            i = arr_31[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, zhibolist_1.zhibolist.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_21 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, zhibolist_1.zhibolist.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_22 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, zhibolist_1.zhibolist.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_23 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, zhibolist_1.zhibolist.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_24 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolistpost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new zhibolist_1.zhibolist(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolistput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_32, i, mi, mi, obj2, arr, _a, arr_33, i, mi, mi, obj2, arr, _b, arr_34, i, mi, mi, obj2, arr, _c, arr_35, i, mi, mi, obj2, arr, _d, arr_36, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_32 = arr; _i < arr_32.length; _i++) {
                                i = arr_32[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_33 = arr; _a < arr_33.length; _a++) {
                                i = arr_33[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_34 = arr; _b < arr_34.length; _b++) {
                                i = arr_34[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_35 = arr; _c < arr_35.length; _c++) {
                                i = arr_35[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_36 = arr; _d < arr_36.length; _d++) {
                                i = arr_36[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolistremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolist_longtimeget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_37, i, error_25, error_26, error_27, error_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_37 = arr; _i < arr_37.length; _i++) {
                            i = arr_37[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, zhibolist_longtime_1.zhibolist_longtime.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_25 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, zhibolist_longtime_1.zhibolist_longtime.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_26 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, zhibolist_longtime_1.zhibolist_longtime.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_27 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, zhibolist_longtime_1.zhibolist_longtime.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_28 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolist_longtimepost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new zhibolist_longtime_1.zhibolist_longtime(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolist_longtimeput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_38, i, mi, mi, obj2, arr, _a, arr_39, i, mi, mi, obj2, arr, _b, arr_40, i, mi, mi, obj2, arr, _c, arr_41, i, mi, mi, obj2, arr, _d, arr_42, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_38 = arr; _i < arr_38.length; _i++) {
                                i = arr_38[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_39 = arr; _a < arr_39.length; _a++) {
                                i = arr_39[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_40 = arr; _b < arr_40.length; _b++) {
                                i = arr_40[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_41 = arr; _c < arr_41.length; _c++) {
                                i = arr_41[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_42 = arr; _d < arr_42.length; _d++) {
                                i = arr_42[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, zhibolist_longtime_1.zhibolist_longtime.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.zhibolist_longtimeremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_longtime_1.zhibolist_longtime.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.userget = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_43, i, error_29, error_30, error_31, error_32;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('back')) return [3, 10];
                        obj2 = {};
                        if (!obj['back'].includes(',')) return [3, 5];
                        arr = obj['back'].split(',');
                        for (_i = 0, arr_43 = arr; _i < arr_43.length; _i++) {
                            i = arr_43[_i];
                            obj2[i] = 1;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, user_1.user.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 2:
                        cab = _a.sent();
                        return [3, 4];
                    case 3:
                        error_29 = _a.sent();
                        return [2, ""];
                    case 4: return [3, 9];
                    case 5:
                        obj2 = obj['back'];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4, user_1.user.find(obj, obj2, { limit: parseInt(obj['limit']) })];
                    case 7:
                        cab = _a.sent();
                        return [3, 9];
                    case 8:
                        error_30 = _a.sent();
                        return [2, ""];
                    case 9: return [3, 18];
                    case 10:
                        if (!keyword.includes('limit')) return [3, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4, user_1.user.find(obj, null, { limit: parseInt(obj['limit']) })];
                    case 12:
                        cab = _a.sent();
                        return [3, 14];
                    case 13:
                        error_31 = _a.sent();
                        return [2, ""];
                    case 14: return [3, 18];
                    case 15:
                        _a.trys.push([15, 17, , 18]);
                        return [4, user_1.user.find(obj)];
                    case 16:
                        cab = _a.sent();
                        return [3, 18];
                    case 17:
                        error_32 = _a.sent();
                        return [2, ""];
                    case 18: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.userpost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var needsave, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        needsave = new user_1.user(data);
                        return [4, needsave.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.userput = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, keyword, prop, cab, obj2, arr, _i, arr_44, i, mi, mi, obj2, arr, _a, arr_45, i, mi, mi, obj2, arr, _b, arr_46, i, mi, mi, obj2, arr, _c, arr_47, i, mi, mi, obj2, arr, _d, arr_48, i, mi, mi;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        obj = {};
                        keyword = [];
                        for (prop in data) {
                            obj[prop] = data[prop];
                            keyword.push(prop);
                        }
                        if (!keyword.includes('inc')) return [3, 2];
                        obj2 = {};
                        if (obj['inc'].includes(',')) {
                            arr = obj['inc'].split(',');
                            for (_i = 0, arr_44 = arr; _i < arr_44.length; _i++) {
                                i = arr_44[_i];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['inc'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, user_1.user.updateOne({ _id: id }, { '$inc': obj2 })];
                    case 1:
                        cab = _e.sent();
                        return [3, 12];
                    case 2:
                        if (!keyword.includes('pull')) return [3, 4];
                        obj2 = {};
                        if (obj['pull'].includes(',')) {
                            arr = obj['pull'].split(',');
                            for (_a = 0, arr_45 = arr; _a < arr_45.length; _a++) {
                                i = arr_45[_a];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pull'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, user_1.user.updateOne({ _id: id }, { '$pull': obj2 })];
                    case 3:
                        cab = _e.sent();
                        return [3, 12];
                    case 4:
                        if (!keyword.includes('push')) return [3, 6];
                        obj2 = {};
                        if (obj['push'].includes(',')) {
                            arr = obj['push'].split(',');
                            for (_b = 0, arr_46 = arr; _b < arr_46.length; _b++) {
                                i = arr_46[_b];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['push'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, user_1.user.updateOne({ _id: id }, { '$push': obj2 })];
                    case 5:
                        cab = _e.sent();
                        return [3, 12];
                    case 6:
                        if (!keyword.includes('pop')) return [3, 8];
                        obj2 = {};
                        if (obj['pop'].includes(',')) {
                            arr = obj['pop'].split(',');
                            for (_c = 0, arr_47 = arr; _c < arr_47.length; _c++) {
                                i = arr_47[_c];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['pop'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, user_1.user.updateOne({ _id: id }, { '$pop': obj2 })];
                    case 7:
                        cab = _e.sent();
                        return [3, 12];
                    case 8:
                        if (!keyword.includes('addToSet')) return [3, 10];
                        obj2 = {};
                        if (obj['addToSet'].includes(',')) {
                            arr = obj['addToSet'].split(',');
                            for (_d = 0, arr_48 = arr; _d < arr_48.length; _d++) {
                                i = arr_48[_d];
                                mi = i.split('$');
                                obj2[mi[0]] = mi[1];
                            }
                        }
                        else {
                            mi = obj['addToSet'].split('$');
                            obj2[mi[0]] = mi[1];
                        }
                        return [4, user_1.user.updateOne({ _id: id }, { '$addToSet': obj2 })];
                    case 9:
                        cab = _e.sent();
                        return [3, 12];
                    case 10: return [4, user_1.user.updateOne({ _id: id }, data)];
                    case 11:
                        cab = _e.sent();
                        _e.label = 12;
                    case 12: return [2, { data: cab }];
                }
            });
        });
    };
    AutoController.prototype.userremove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, user_1.user.deleteOne({ _id: id })];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Get('auto'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "autoget");
    __decorate([
        routing_controllers_1.Post('auto'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "autopost");
    __decorate([
        routing_controllers_1.Put('auto/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "autoput");
    __decorate([
        routing_controllers_1.Delete('auto/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "autoremove");
    __decorate([
        routing_controllers_1.Get('test'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "testget");
    __decorate([
        routing_controllers_1.Post('test'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "testpost");
    __decorate([
        routing_controllers_1.Put('test/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "testput");
    __decorate([
        routing_controllers_1.Delete('test/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "testremove");
    __decorate([
        routing_controllers_1.Get('livegroup'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "livegroupget");
    __decorate([
        routing_controllers_1.Post('livegroup'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "livegrouppost");
    __decorate([
        routing_controllers_1.Put('livegroup/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "livegroupput");
    __decorate([
        routing_controllers_1.Delete('livegroup/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "livegroupremove");
    __decorate([
        routing_controllers_1.Get('message'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "messageget");
    __decorate([
        routing_controllers_1.Post('message'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "messagepost");
    __decorate([
        routing_controllers_1.Put('message/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "messageput");
    __decorate([
        routing_controllers_1.Delete('message/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "messageremove");
    __decorate([
        routing_controllers_1.Get('skyuser'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "skyuserget");
    __decorate([
        routing_controllers_1.Post('skyuser'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "skyuserpost");
    __decorate([
        routing_controllers_1.Put('skyuser/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "skyuserput");
    __decorate([
        routing_controllers_1.Delete('skyuser/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "skyuserremove");
    __decorate([
        routing_controllers_1.Get('zhibolist'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolistget");
    __decorate([
        routing_controllers_1.Post('zhibolist'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolistpost");
    __decorate([
        routing_controllers_1.Put('zhibolist/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolistput");
    __decorate([
        routing_controllers_1.Delete('zhibolist/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolistremove");
    __decorate([
        routing_controllers_1.Get('zhibolist_longtime'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolist_longtimeget");
    __decorate([
        routing_controllers_1.Post('zhibolist_longtime'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolist_longtimepost");
    __decorate([
        routing_controllers_1.Put('zhibolist_longtime/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolist_longtimeput");
    __decorate([
        routing_controllers_1.Delete('zhibolist_longtime/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "zhibolist_longtimeremove");
    __decorate([
        routing_controllers_1.Get('user'),
        __param(0, routing_controllers_1.QueryParams()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "userget");
    __decorate([
        routing_controllers_1.Post('user'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "userpost");
    __decorate([
        routing_controllers_1.Put('user/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "userput");
    __decorate([
        routing_controllers_1.Delete('user/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AutoController.prototype, "userremove");
    AutoController = __decorate([
        routing_controllers_1.JsonController(),
        typedi_1.Service()
    ], AutoController);
    return AutoController;
}());
exports.AutoController = AutoController;
