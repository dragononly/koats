"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.decService = void 0;
var typedi_1 = require("typedi");
var crypto = require('crypto');
var decService = (function () {
    function decService() {
    }
    decService.prototype.decode = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var decodeParam, ciphertext, decipher, plaintext;
            return __generator(this, function (_a) {
                decodeParam = {
                    algorithm: 'des-cbc',
                    autoPadding: true,
                    key: 'pjs_7#31',
                    ciphertext: val,
                    iv: 'pjs_7#31'
                };
                try {
                    ciphertext = decodeParam.ciphertext.toString();
                    decipher = crypto.createDecipheriv(decodeParam.algorithm, decodeParam.key, decodeParam.iv);
                    decipher.setAutoPadding(decodeParam.autoPadding);
                    plaintext = decipher.update(ciphertext, 'base64', 'utf8');
                    plaintext += decipher.final('utf8');
                    return [2, plaintext];
                }
                catch (err) {
                    console.log("decrypto data failed: " + err);
                    return [2, null];
                }
                return [2];
            });
        });
    };
    decService.prototype.encode = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var encodeParam, plain, cipher, ciphertext;
            return __generator(this, function (_a) {
                encodeParam = {
                    algorithm: 'des-cbc',
                    autoPadding: true,
                    key: 'pjs_7#31',
                    plaintext: val,
                    iv: 'pjs_7#31'
                };
                try {
                    plain = encodeParam.plaintext.toString();
                    cipher = crypto.createCipheriv(encodeParam.algorithm, encodeParam.key, encodeParam.iv);
                    cipher.setAutoPadding(encodeParam.autoPadding);
                    ciphertext = cipher.update(plain, 'utf8', 'base64');
                    ciphertext += cipher.final('base64');
                    return [2, ciphertext];
                }
                catch (err) {
                    console.log("crypto data failed: " + err);
                    return [2, null];
                }
                return [2];
            });
        });
    };
    decService = __decorate([
        typedi_1.Service()
    ], decService);
    return decService;
}());
exports.decService = decService;
