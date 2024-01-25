"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = exports.getCacheData = exports.isCached = exports.cacheData = exports.geneRateCacheKey = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const middlewares_1 = require("../middlewares");
const helper_1 = require("../helper");
const constant_1 = require("../constant");
const cache = new node_cache_1.default();
setInterval(() => {
    const toDay = (0, helper_1.getToday)();
    const hour = (0, helper_1.getCurrentHour)();
    (0, middlewares_1.logData)(`${toDay}-${hour} Clear Cached`);
    return (0, exports.clearCache)();
}, constant_1.ONE_MINUTE);
const geneRateCacheKey = (request) => request.baseUrl + request.url;
exports.geneRateCacheKey = geneRateCacheKey;
const cacheData = (key, data) => cache.set(key, data);
exports.cacheData = cacheData;
const isCached = (request) => {
    const key = request.baseUrl + request.url;
    return !!cache.get(key);
};
exports.isCached = isCached;
const getCacheData = (key) => cache.get(key);
exports.getCacheData = getCacheData;
const clearCache = () => cache.flushAll();
exports.clearCache = clearCache;
