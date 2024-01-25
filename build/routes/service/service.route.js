"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const service_controller_1 = require("./service.controller");
exports.router = (0, express_1.Router)();
exports.router.get('/', service_controller_1.fetchController);
