"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class Plus extends _token_1.Token {
    static railroad() {
        return "+";
    }
}
exports.Plus = Plus;
class WPlus extends _token_1.Token {
    static railroad() {
        return " +";
    }
}
exports.WPlus = WPlus;
class PlusW extends _token_1.Token {
    static railroad() {
        return "+ ";
    }
}
exports.PlusW = PlusW;
class WPlusW extends _token_1.Token {
    static railroad() {
        return " + ";
    }
}
exports.WPlusW = WPlusW;
