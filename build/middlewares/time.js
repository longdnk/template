"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimestamp = void 0;
const addTimestamp = (request, response, next) => {
    request.timestamp = Date.now();
    next();
};
exports.addTimestamp = addTimestamp;
