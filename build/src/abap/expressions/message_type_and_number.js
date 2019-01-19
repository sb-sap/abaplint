"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class MessageTypeAndNumber extends combi_1.Expression {
    getRunnable() {
        return combi_1.regex(/^[iweaxs]\d\d\d$/i);
    }
}
exports.MessageTypeAndNumber = MessageTypeAndNumber;
