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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AwriteController = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var filenamelist = [];
var dirback = fs_extra_1["default"].readdirSync('./configs/db/schema');
for (var _i = 0, dirback_1 = dirback; _i < dirback_1.length; _i++) {
    var i = dirback_1[_i];
    if (i.includes('.')) {
        filenamelist.push(i.split('.')[0]);
    }
    else {
        var dirback2 = fs_extra_1["default"].readdirSync('./configs/db/schema/' + i);
        for (var _a = 0, dirback2_1 = dirback2; _a < dirback2_1.length; _a++) {
            var i2 = dirback2_1[_a];
            filenamelist.push(i + '/' + i2.split('.')[0]);
        }
    }
}
var awritefun = function () {
    fs_extra_1["default"].writeFileSync('./app/controllers/auto/auto.controller.ts', lastmodel);
};
var AwriteController = (function () {
    function AwriteController() {
    }
    AwriteController.prototype.awriteget = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (id == 888888) {
                    awritefun();
                }
                return [2, '自动书写代码完成'];
            });
        });
    };
    __decorate([
        routing_controllers_1.Get('awrite/:id'),
        __param(0, routing_controllers_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], AwriteController.prototype, "awriteget");
    AwriteController = __decorate([
        routing_controllers_1.JsonController(),
        typedi_1.Service()
    ], AwriteController);
    return AwriteController;
}());
exports.AwriteController = AwriteController;
var model0 = "import {\n    Post,\n    JsonController,\n    QueryParams,\n    Get,\n    Put,\n    Param,\n    Body,\n    Delete\n} from 'routing-controllers'\nimport { Service } from 'typedi'";
var model1 = "";
var model2 = "\n     @JsonController()\n     @Service()\n     export class AutoController {";
var model3 = "";
for (var _b = 0, filenamelist_1 = filenamelist; _b < filenamelist_1.length; _b++) {
    var i = filenamelist_1[_b];
    var mini = i.split('/')[1];
    model1 += "\nimport { " + mini + " } from '../../../configs/db/schema/" + i + "'";
    model3 += "\n        //Get content\n        @Get('" + mini + "')\n        async " + mini + "get(@QueryParams() data: any) {\n            let obj: any = {}\n            let keyword = []\n            for (var prop in data) {\n                obj[prop] = data[prop]\n                keyword.push(prop)\n            }\n            let cab: any\n            if (keyword.includes('back')) {\n                let obj2: any = {}\n                if (obj['back'].includes(',')) {\n                    let arr = obj['back'].split(',')\n                    for (const i of arr) {\n                        obj2[i] = 1\n                    }\n                    try {\n                        cab = await " + mini + ".find(obj, obj2, { limit: parseInt(obj['limit']) })\n                    }catch (error){\n                        return \"\"\n                    }\n                } else {\n                    obj2 = obj['back']\n                    try {\n                        cab = await " + mini + ".find(obj, obj2, { limit: parseInt(obj['limit']) })\n                    }catch (error){\n                        return \"\"\n                    } \n                }\n            }\n            else if (keyword.includes('limit')) {\n                try {\n                    cab = await " + mini + ".find(obj, null, { limit: parseInt(obj['limit']) })\n                }catch (error){\n                    return \"\"\n                }\n            }\n            else {\n                try {\n                    cab = await " + mini + ".find(obj)\n                }catch (error){\n                    return \"\"\n                }\n            }\n            return { data: cab };\n        }\n        //Post content\n        @Post('" + mini + "')\n        async " + mini + "post(@Body() data: any) {\n            let needsave = new " + mini + "(data)\n            let cab = await needsave.save()\n            return { data: cab };\n        }\n        //Put content\n        @Put('" + mini + "/:id')\n        async " + mini + "put(@Param('id') id: string, @Body() data: any) {\n            let obj: any = {}\n            let keyword = []\n            for (var prop in data) {\n                obj[prop] = data[prop]\n                keyword.push(prop)\n            }\n            let cab: any\n            if (keyword.includes('inc')) {\n                let obj2: any = {}\n                if (obj['inc'].includes(',')) {\n                    let arr = obj['inc'].split(',')\n                    for (const i of arr) {\n                        const mi=i.split('$')\n                        obj2[mi[0]] = mi[1]\n                    }\n                } else {\n                    const mi=obj['inc'].split('$')\n                    obj2[mi[0]] = mi[1]\n                }\n                cab = await " + mini + ".updateOne({ _id: id }, { '$inc': obj2 })\n            } \n\t\t\telse if (keyword.includes('pull')) {\n\t\t\t            let obj2: any = {}\n\t\t\t            if (obj['pull'].includes(',')) {\n\t\t\t                let arr = obj['pull'].split(',')\n\t\t\t                for (const i of arr) {\n\t\t\t                    const mi = i.split('$')\n\t\t\t                    obj2[mi[0]] = mi[1]\n\t\t\t                }\n\t\t\t            } else {\n\t\t\t                const mi = obj['pull'].split('$')\n\t\t\t                obj2[mi[0]] = mi[1]\n\t\t\t            }\n\t\t\t            cab = await " + mini + ".updateOne({ _id: id }, { '$pull': obj2 })\n\t\t\t} else if (keyword.includes('push')) {\n\t\t\t            let obj2: any = {}\n\t\t\t            if (obj['push'].includes(',')) {\n\t\t\t                let arr = obj['push'].split(',')\n\t\t\t                for (const i of arr) {\n\t\t\t                    const mi = i.split('$')\n\t\t\t                    obj2[mi[0]] = mi[1]\n\t\t\t                }\n\t\t\t            } else {\n\t\t\t                const mi = obj['push'].split('$')\n\t\t\t                obj2[mi[0]] = mi[1]\n\t\t\t            }\n\t\t\t            cab = await " + mini + ".updateOne({ _id: id }, { '$push': obj2 })\n\t\t\t}\n\t\t\telse if (keyword.includes('pop')) {\n\t\t\t            let obj2: any = {}\n\t\t\t            if (obj['pop'].includes(',')) {\n\t\t\t                let arr = obj['pop'].split(',')\n\t\t\t                for (const i of arr) {\n\t\t\t                    const mi = i.split('$')\n\t\t\t                    obj2[mi[0]] = mi[1]\n\t\t\t                }\n\t\t\t            } else {\n\t\t\t                const mi = obj['pop'].split('$')\n\t\t\t                obj2[mi[0]] = mi[1]\n\t\t\t            }\n\t\t\t            cab = await " + mini + ".updateOne({ _id: id }, { '$pop': obj2 })\n\t\t\t}\n\t\t\telse if (keyword.includes('addToSet')) {\n\t\t\t            let obj2: any = {}\n\t\t\t            if (obj['addToSet'].includes(',')) {\n\t\t\t                let arr = obj['addToSet'].split(',')\n\t\t\t                for (const i of arr) {\n\t\t\t                    const mi = i.split('$')\n\t\t\t                    obj2[mi[0]] = mi[1]\n\t\t\t                }\n\t\t\t            } else {\n\t\t\t                const mi = obj['addToSet'].split('$')\n\t\t\t                obj2[mi[0]] = mi[1]\n\t\t\t            }\n\t\t\t            cab = await " + mini + ".updateOne({ _id: id }, { '$addToSet': obj2 })\n\t\t\t}\n\t\t\telse {\n                cab = await " + mini + ".updateOne({ _id: id }, data)\n            }\n            return { data: cab };\n        }\n        //Delete content\n        @Delete('" + mini + "/:id')\n        async " + mini + "remove(@Param('id') id: string) {\n            let cab = await " + mini + ".deleteOne({ _id: id })\n            return { data: cab };\n        }";
}
var lastmodel = model0 + model1 + model2 + model3 + "\n}";
