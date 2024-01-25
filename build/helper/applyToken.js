"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyToken = void 0;
require('dotenv').config();
const applyToken = (token) => {
    let config = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: '',
        }
    };
    if (token) {
        config = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `${token}`,
            }
        };
    }
    return config;
};
exports.applyToken = applyToken;
