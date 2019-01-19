"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class ParenRight extends _token_1.Token {
    static railroad() {
        return ")";
    }
}
exports.ParenRight = ParenRight;
class WParenRight extends _token_1.Token {
    static railroad() {
        return " )";
    }
}
exports.WParenRight = WParenRight;
class ParenRightW extends _token_1.Token {
    static railroad() {
        return ") ";
    }
}
exports.ParenRightW = ParenRightW;
class WParenRightW extends _token_1.Token {
    static railroad() {
        return " ) ";
    }
}
exports.WParenRightW = WParenRightW;
