"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class BracketRight extends _token_1.Token {
    static railroad() {
        return "]";
    }
}
exports.BracketRight = BracketRight;
class WBracketRight extends _token_1.Token {
    static railroad() {
        return " ]";
    }
}
exports.WBracketRight = WBracketRight;
class BracketRightW extends _token_1.Token {
    static railroad() {
        return "] ";
    }
}
exports.BracketRightW = BracketRightW;
class WBracketRightW extends _token_1.Token {
    static railroad() {
        return " ] ";
    }
}
exports.WBracketRightW = WBracketRightW;
