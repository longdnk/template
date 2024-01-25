"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = exports.errorHandler = void 0;
const constant_1 = require("../constant");
const log_1 = require("./log");
const errorHandler = (error, request, response, next) => {
    console.error(error.stack);
    response.status(constant_1.ResponseStatus.BAD_REQUEST).send(error.message);
    next();
};
exports.errorHandler = errorHandler;
const errorLogger = (error, request, response) => {
    console.error(error.stack);
    const err = error;
    const statusCode = err.response?.status ?? constant_1.ResponseStatus.BAD_REQUEST;
    const message = err.response?.data ?? err.message;
    const dataSend = {
        status: statusCode,
        response: message,
    };
    (0, log_1.logData)(dataSend);
    return response.status(statusCode).send(dataSend);
};
exports.errorLogger = errorLogger;
