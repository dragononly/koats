"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(require("./sessions.controller"), exports);
__exportStar(require("./live/live.controller"), exports);
__exportStar(require("./openapi/openapi.controller"), exports);
__exportStar(require("./zxylive/zxylive.controller"), exports);
__exportStar(require("./auto/awrite"), exports);
__exportStar(require("./auto/auto.controller"), exports);
