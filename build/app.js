"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const routes_1 = require("./routes");
// ADD .ENV
require('dotenv').config();
// INIT APP
const app = (0, express_1.default)();
// LOAD PORT
const port = process.env.APP_PORT ?? 9000;
// CACHING
app.use((request, response, next) => {
    if (!('JSONResponse' in response)) {
        return next();
    }
    response.set('Cache-Control', 'public, max-age=31557600'); // 1 YEAR CACHE
    response.json(response.JSONResponse);
});
// APPLY JSON
app.use(express_1.default.json());
// ADD TIMESTAMP
app.use(middlewares_1.addTimestamp);
// TOOL LOGGER
app.use(middlewares_1.logger);
app.use('/service', routes_1.serviceRouter);
// LISTEN PORT
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
