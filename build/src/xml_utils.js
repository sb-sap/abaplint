"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xmlToArray(data) {
    if (data.length) { // input data is an Array
        return data;
    }
    else {
        return [data];
    }
}
exports.xmlToArray = xmlToArray;
