"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(num, msg) {
        this.num = num;
        this.msg = msg;
    }
    getNumber() {
        return this.num;
    }
    getMessage() {
        return this.msg;
    }
    getPlaceholderCount() {
        return (this.getMessage().match(/&/g) || []).length;
    }
}
exports.Message = Message;
