"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.ZhixueyunLiveController = void 0;
var routing_controllers_1 = require("routing-controllers");
var services_1 = require("../../services/index");
var dec_service_1 = require("../../services/tools/dec.service");
var typedi_1 = require("typedi");
var jwt = __importStar(require("jsonwebtoken"));
var ve = (function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var decoded;
    return __generator(this, function (_a) {
        try {
            decoded = jwt.verify(token, process.env.KEY, {
                complete: true
            });
            return [2, decoded];
        }
        catch (_b) {
            return [2, false];
        }
        return [2];
    });
}); });
var ZhixueyunLiveController = (function () {
    function ZhixueyunLiveController(catsService, decService) {
        this.catsService = catsService;
        this.decService = decService;
    }
    ZhixueyunLiveController.prototype.zhixueyun_addlive = function (data, token) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, this.catsService.zhixueyun_addlive(data)];
                    case 2:
                        cab = _a.sent();
                        return [2, { data: cab }];
                    case 3: return [2, false];
                }
            });
        });
    };
    ZhixueyunLiveController.prototype.zhixueyun_tokenlogin = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var cab, _c, eid, zhiboid;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        cab = _d.sent();
                        if (cab) {
                            _c = [(_a = cab === null || cab === void 0 ? void 0 : cab.payload) === null || _a === void 0 ? void 0 : _a.eid, (_b = cab === null || cab === void 0 ? void 0 : cab.payload) === null || _b === void 0 ? void 0 : _b.zhiboid], eid = _c[0], zhiboid = _c[1];
                            return [2, { data: { eid: eid, zhiboid: zhiboid } }];
                        }
                        else {
                            return [2, false];
                        }
                        return [2, false];
                }
            });
        });
    };
    ZhixueyunLiveController.prototype.zhixueyun_changlive = function (id, data, token) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, this.catsService.zhixueyun_changlive(id, data)];
                    case 2:
                        cab = _a.sent();
                        return [2, { data: cab }];
                    case 3: return [2, false];
                }
            });
        });
    };
    ZhixueyunLiveController.prototype.zhixueyun_zhibolist = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, this.catsService.zhixueyun_zhibolist()];
                    case 2:
                        cab = _a.sent();
                        return [2, { data: cab }];
                    case 3: return [2, false];
                }
            });
        });
    };
    ZhixueyunLiveController.prototype.zhixueyun_dezhibo = function (id, token) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, this.catsService.zhixueyun_dezhibo(id)];
                    case 2:
                        cab = _a.sent();
                        return [2, { data: cab }];
                    case 3: return [2, false];
                }
            });
        });
    };
    ZhixueyunLiveController.prototype.zhixueyun_watch = function (response, data, token) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ve(token)];
                    case 1:
                        cab = _a.sent();
                        if (cab) {
                            return [2, "http://127.0.0.1:3000/#/center?accesstoken=" + token];
                        }
                        else {
                            return [2, false];
                        }
                        return [2];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Post('zxylive/addlive'),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_addlive");
    __decorate([
        routing_controllers_1.Post('zxylive/tokenlogin'),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_tokenlogin");
    __decorate([
        routing_controllers_1.Put('zxylive/changlive/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()), __param(2, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_changlive");
    __decorate([
        routing_controllers_1.Get('zxylive/zhibolist'),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_zhibolist");
    __decorate([
        routing_controllers_1.Delete('zxylive/dezhibo/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_dezhibo");
    __decorate([
        routing_controllers_1.Get("zxylive/watch"),
        __param(0, routing_controllers_1.Res()), __param(1, routing_controllers_1.QueryParams()), __param(2, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, String]),
        __metadata("design:returntype", Promise)
    ], ZhixueyunLiveController.prototype, "zhixueyun_watch");
    ZhixueyunLiveController = __decorate([
        routing_controllers_1.JsonController(),
        typedi_1.Service(),
        __metadata("design:paramtypes", [services_1.LiveService, dec_service_1.decService])
    ], ZhixueyunLiveController);
    return ZhixueyunLiveController;
}());
exports.ZhixueyunLiveController = ZhixueyunLiveController;
