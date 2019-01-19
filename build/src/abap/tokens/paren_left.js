"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class ParenLeft extends _token_1.Token {
    static railroad() {
        return "(";
    }
}
exports.ParenLeft = ParenLeft;
class WParenLeft extends _token_1.Token {
    static railroad() {
        return " (";
    }
}
exports.WParenLeft = WParenLeft;
class ParenLeftW extends _token_1.Token {
    static railroad() {
        return "( ";
    }
}
exports.ParenLeftW = ParenLeftW;
class WParenLeftW extends _token_1.Token {
    static railroad() {
        return " ( ";
    }
}
exports.WParenLeftW = WParenLeftW;
