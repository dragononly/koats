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
exports.LiveController = void 0;
var routing_controllers_1 = require("routing-controllers");
var services_1 = require("../../services/index");
var dec_service_1 = require("../../services/tools/dec.service");
var typedi_1 = require("typedi");
var LiveController = (function () {
    function LiveController(catsService, decService) {
        this.catsService = catsService;
        this.decService = decService;
    }
    LiveController.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cabpwd, login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.decService.encode(data.pwd)];
                    case 1:
                        cabpwd = _a.sent();
                        return [4, this.catsService.login(data.user, cabpwd)];
                    case 2:
                        login = _a.sent();
                        return [2, { data: login }];
                }
            });
        });
    };
    LiveController.prototype.addvideourl = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.addvideourl(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.livegroup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.livegroup(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.findzhibo_groupname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.findzhibo_groupname()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.gainvideourl = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.gainvideourl(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.message = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.message(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.getmessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.getmessage(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.findallsignusertime = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.findallsignusertime(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.savesign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.savesign(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.addsigntime = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.addsigntime(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.degzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.degzhibo(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.searchidzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.searchidzhibo(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.ongroupmyzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.ongroupmyzhibo(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.eid = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.eid(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.updatezhibogroup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.updatezhibogroup(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.updatezhiboguest = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.updatezhiboguest(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.findzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.findzhibo(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.addzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.addzhibo(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.searchgroup2 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.searchgroup2()];
                    case 1:
                        login = _a.sent();
                        return [2, { data: login }];
                }
            });
        });
    };
    LiveController.prototype.degroup2 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.degroup2(data)];
                    case 1:
                        login = _a.sent();
                        return [2, { data: login }];
                }
            });
        });
    };
    LiveController.prototype.savegroup2 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.savegroup2(data)];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.treedata = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.treedata()];
                    case 1:
                        cab = _a.sent();
                        return [2, { data: cab }];
                }
            });
        });
    };
    LiveController.prototype.branch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.branch()];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    LiveController.prototype.department = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.department(data)];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    LiveController.prototype.departmentchild = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.departmentchild(data)];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    LiveController.prototype.departmentchildname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.departmentchildname(data)];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    LiveController.prototype.branchforname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.branchforname(data)];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    LiveController.prototype.branchanddepartmentname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var guestreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.catsService.branchanddepartmentname(data)];
                    case 1:
                        guestreg = _a.sent();
                        return [2, { data: guestreg }];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Post('live/login'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "login");
    __decorate([
        routing_controllers_1.Post('live/addvideourl'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "addvideourl");
    __decorate([
        routing_controllers_1.Post('live/livegroup'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "livegroup");
    __decorate([
        routing_controllers_1.Post('live/findzhibo_groupname'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "findzhibo_groupname");
    __decorate([
        routing_controllers_1.Post('live/gainvideourl'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "gainvideourl");
    __decorate([
        routing_controllers_1.Post('live/message'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "message");
    __decorate([
        routing_controllers_1.Post('live/getmessage'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "getmessage");
    __decorate([
        routing_controllers_1.Post('live/findallsignusertime'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "findallsignusertime");
    __decorate([
        routing_controllers_1.Post('live/savesign'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "savesign");
    __decorate([
        routing_controllers_1.Post('live/addsigntime'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "addsigntime");
    __decorate([
        routing_controllers_1.Post('live/degzhibo'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "degzhibo");
    __decorate([
        routing_controllers_1.Post('live/searchidzhibo'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "searchidzhibo");
    __decorate([
        routing_controllers_1.Post('live/ongroupmyzhibo'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "ongroupmyzhibo");
    __decorate([
        routing_controllers_1.Post('live/eid'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "eid");
    __decorate([
        routing_controllers_1.Post('live/updatezhibogroup'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "updatezhibogroup");
    __decorate([
        routing_controllers_1.Post('live/updatezhiboguest'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "updatezhiboguest");
    __decorate([
        routing_controllers_1.Post('live/findzhibo'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "findzhibo");
    __decorate([
        routing_controllers_1.Post('live/addzhibo'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "addzhibo");
    __decorate([
        routing_controllers_1.Post('live/searchgroup2'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "searchgroup2");
    __decorate([
        routing_controllers_1.Post('live/degroup2'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "degroup2");
    __decorate([
        routing_controllers_1.Post('live/savegroup2'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "savegroup2");
    __decorate([
        routing_controllers_1.Post('live/treedata'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "treedata");
    __decorate([
        routing_controllers_1.Post('live/branch'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "branch");
    __decorate([
        routing_controllers_1.Post('live/department'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "department");
    __decorate([
        routing_controllers_1.Post('live/departmentchild'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "departmentchild");
    __decorate([
        routing_controllers_1.Post('live/departmentchildname'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "departmentchildname");
    __decorate([
        routing_controllers_1.Post('live/branchforname'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "branchforname");
    __decorate([
        routing_controllers_1.Post('live/branchanddepartmentname'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LiveController.prototype, "branchanddepartmentname");
    LiveController = __decorate([
        routing_controllers_1.JsonController(),
        typedi_1.Service(),
        __metadata("design:paramtypes", [services_1.LiveService, dec_service_1.decService])
    ], LiveController);
    return LiveController;
}());
exports.LiveController = LiveController;
