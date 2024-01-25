"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logData = exports.logger = void 0;
const helper_1 = require("../helper");
const util_1 = __importDefault(require("util"));
const logger = (request, response, next) => {
    const today = (0, helper_1.getToday)();
    const currentHour = (0, helper_1.getCurrentHour)();
    const logger = `${request.timestamp}-${today}-${currentHour} ${request.method}-${response.statusCode} ${request.ip} ${request.originalUrl}`;
    console.log(logger);
    next();
};
exports.logger = logger;
const logData = (data) => console.log(util_1.default.inspect(data, false, null, true /* enable colors */));
exports.logData = logData;
