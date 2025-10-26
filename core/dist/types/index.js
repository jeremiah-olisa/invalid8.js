"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidationType = exports.CacheStatus = void 0;
var CacheStatus;
(function (CacheStatus) {
    CacheStatus["IDLE"] = "idle";
    CacheStatus["LOADING"] = "loading";
    CacheStatus["SUCCESS"] = "success";
    CacheStatus["ERROR"] = "error";
    CacheStatus["STALE"] = "stale";
})(CacheStatus || (exports.CacheStatus = CacheStatus = {}));
var InvalidationType;
(function (InvalidationType) {
    InvalidationType["MANUAL"] = "manual";
    InvalidationType["TIMEOUT"] = "timeout";
    InvalidationType["EVENT"] = "event";
    InvalidationType["DEPENDENCY"] = "dependency";
})(InvalidationType || (exports.InvalidationType = InvalidationType = {}));
//# sourceMappingURL=index.js.map