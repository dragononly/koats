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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LiveService = void 0;
var typedi_1 = require("typedi");
var zhibolist_1 = require("../../../configs/db/schema/live/zhibolist");
var message_1 = require("../../../configs/db/schema/live/message");
var skyuser_1 = require("../../../configs/db/schema/live/skyuser");
var livegroup_1 = require("../../../configs/db/schema/live/livegroup");
var client_1 = require("@prisma/client");
var mongo_1 = __importDefault(require("../../../configs/db/mongo"));
var prisma = new client_1.PrismaClient();
var LiveService = (function () {
    function LiveService() {
    }
    LiveService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                livegroup_1.livegroup.find({});
                return [2];
            });
        });
    };
    LiveService.prototype.addvideourl = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                cab = zhibolist_1.zhibolist.updateOne({ _id: data.id }, { url: data.url });
                return [2, cab];
            });
        });
    };
    LiveService.prototype.zhixueyun_addlive = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newval, createdCat, cab, re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newval = {
                            name: data.name,
                            starttime: [data.starttime, data.endtime]
                        };
                        createdCat = new zhibolist_1.zhibolist(newval);
                        return [4, createdCat.save()];
                    case 1:
                        cab = _a.sent();
                        if (cab) {
                            re = { status: "ok", zhiboid: cab._id, name: cab.name };
                            return [2, re];
                        }
                        return [2];
                }
            });
        });
    };
    LiveService.prototype.zhixueyun_zhibolist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.find({}, { name: 1, lookback: 1 })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.zhixueyun_changlive = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, zhibolist_1.zhibolist.updateOne({ _id: id }, { 'name': data.name, starttime: [data.starttime, data.endtime] })];
                    case 1:
                        cab = _b.sent();
                        return [2, cab];
                    case 2:
                        _a = _b.sent();
                        return [2, false];
                    case 3: return [2];
                }
            });
        });
    };
    LiveService.prototype.zhixueyun_dezhibo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cab, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, zhibolist_1.zhibolist.deleteOne({ _id: id })];
                    case 1:
                        cab = _b.sent();
                        return [2, cab];
                    case 2:
                        _a = _b.sent();
                        return [2, false];
                    case 3: return [2];
                }
            });
        });
    };
    LiveService.prototype.zhixueyun_getvideo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    LiveService.prototype.addlike = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var thedata, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thedata = {
                            name: data.name
                        };
                        return [4, zhibolist_1.zhibolist.findByIdAndUpdate({ _id: data.id }, { $push: { like: thedata } })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.delike = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findById({ _id: data.id }, { like: 1 })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab.like[0]];
                }
            });
        });
    };
    LiveService.prototype.gainvideourl = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                cab = zhibolist_1.zhibolist.findById({ _id: data.id });
                return [2, cab];
            });
        });
    };
    LiveService.prototype.livegroup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                cab = livegroup_1.livegroup.findOne({ groupname: data.groupname });
                return [2, cab];
            });
        });
    };
    LiveService.prototype.message = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var createdCat, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createdCat = new message_1.message(data);
                        return [4, createdCat.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.getmessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.type) return [3, 2];
                        return [4, message_1.message.find({ zhiboid: data.zhiboid })];
                    case 1:
                        cab = _a.sent();
                        return [3, 4];
                    case 2: return [4, message_1.message.find({ type: '1', zhiboid: data.zhiboid })];
                    case 3:
                        cab = _a.sent();
                        _a.label = 4;
                    case 4: return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.findallsignusertime = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findById({ _id: data.zhiboid })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.savesign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findByIdAndUpdate({ _id: data.zhiboid }, { $push: { usersign: data.sign } })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.addsigntime = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findByIdAndUpdate({ _id: data._id }, { $addToSet: { signtime: data.time } })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.degzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findByIdAndRemove({ _id: data._id })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.searchidzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findById({ _id: data._id })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.ongroupmyzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.find({
                            group: { $elemMatch: { $eq: data.groupname } }
                        })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.eid = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.findOne({ eid: data.eid })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.updatezhibogroup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findByIdAndUpdate({ _id: data._id }, { power: data.power })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.updatezhiboguest = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.findByIdAndUpdate({ _id: data.id }, { power: data.power })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.findzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.find()];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.findzhibo_groupname = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, zhibolist_1.zhibolist.find({}, { group: 1 })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.addzhibo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newval, createdCat, cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newval = {
                            name: data.name,
                            starttime: data.starttime,
                            group: data.group,
                            power: data.power,
                            signtime: data.signtime,
                            url: data.url
                        };
                        createdCat = new zhibolist_1.zhibolist(newval);
                        return [4, createdCat.save()];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.degroup2 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, livegroup_1.livegroup.deleteMany({
                            _id: data._id
                        })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.searchgroup2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, livegroup_1.livegroup.find()];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.branch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.find().distinct('branch')];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.department = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser
                            .find({ branch: data.branch })
                            .distinct('department')];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.departmentchild = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser
                            .find({ department: data.department })
                            .distinct('departmentchild')];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.departmentchildname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.find({
                            departmentchild: data.departmentchild
                        })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.branchanddepartmentname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.find({
                            branch: data.branch,
                            department: data.department
                        })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.branchforname = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, skyuser_1.skyuser.find({ branch: data.branch })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.savegroup2 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newval, createdCat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newval = {
                            groupname: data.groupname,
                            branch: data.branch,
                            department: data.department,
                            departmentchild: data.departmentchild,
                            name: data.name
                        };
                        createdCat = new livegroup_1.livegroup(newval);
                        return [4, createdCat.save()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    LiveService.prototype.login = function (user, pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var cab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, prisma.fs_emp_login.findFirst({
                            where: {
                                login_id: user,
                                login_password: pwd
                            }
                        })];
                    case 1:
                        cab = _a.sent();
                        return [2, cab];
                }
            });
        });
    };
    LiveService.prototype.treedata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cabuser, _i, cabuser_1, iterator, user, cabdepartment, newdepart_order_no, onlydepart_name, onlyarea_name, createdCat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, prisma.fs_employee.findMany({ where: { emp_style: 1 } })];
                    case 1:
                        cabuser = _a.sent();
                        _i = 0, cabuser_1 = cabuser;
                        _a.label = 2;
                    case 2:
                        if (!(_i < cabuser_1.length)) return [3, 7];
                        iterator = cabuser_1[_i];
                        user = {
                            branch: '',
                            department: '',
                            departmentchild: '',
                            name: '',
                            eid: '0',
                            rank_id: '0'
                        };
                        user.eid = iterator.eid.toString();
                        user.name = iterator.user_name;
                        user.rank_id = iterator.rank_id.toString();
                        if (iterator.depart_id.toString().length < 8) {
                            return [3, 6];
                        }
                        return [4, prisma.fs_department.findFirst({
                                where: {
                                    depart_id: iterator.depart_id
                                }
                            })];
                    case 3:
                        cabdepartment = _a.sent();
                        try {
                            user.departmentchild = cabdepartment.depart_name;
                        }
                        catch (error) {
                            console.log('cabdepartment' + cabdepartment);
                            return [2];
                        }
                        newdepart_order_no = cabdepartment.depart_order_no;
                        if (cabdepartment.depart_order_no.length == 12) {
                            newdepart_order_no = cabdepartment.depart_order_no.substr(0, 10);
                        }
                        return [4, prisma.fs_department.findFirst({
                                where: {
                                    depart_order_no: newdepart_order_no
                                }
                            })];
                    case 4:
                        onlydepart_name = _a.sent();
                        try {
                            user.department = onlydepart_name.depart_name;
                        }
                        catch (err) {
                            console.log('onlydepart_name' + onlydepart_name);
                            return [2];
                        }
                        return [4, prisma.fs_area.findFirst({
                                where: {
                                    area_id: onlydepart_name.area_id
                                }
                            })];
                    case 5:
                        onlyarea_name = _a.sent();
                        user.branch = onlyarea_name.area_name;
                        createdCat = new skyuser_1.skyuser(user);
                        createdCat.save();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3, 2];
                    case 7: return [2, 'ok'];
                }
            });
        });
    };
    LiveService = __decorate([
        typedi_1.Service()
    ], LiveService);
    return LiveService;
}());
exports.LiveService = LiveService;
