"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentHour = exports.getToday = void 0;
const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    const formattedToday = `${dd}/${mm}/${yyyy}`;
    return formattedToday;
};
exports.getToday = getToday;
const getCurrentHour = () => {
    const today = new Date();
    const hour = today.getHours();
    const formattedHour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return formattedHour;
};
exports.getCurrentHour = getCurrentHour;
