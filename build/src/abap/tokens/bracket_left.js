"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class BracketLeft extends _token_1.Token {
    static railroad() {
        return "[";
    }
}
exports.BracketLeft = BracketLeft;
class WBracketLeft extends _token_1.Token {
    static railroad() {
        return " [";
    }
}
exports.WBracketLeft = WBracketLeft;
class BracketLeftW extends _token_1.Token {
    static railroad() {
        return "[ ";
    }
}
exports.BracketLeftW = BracketLeftW;
class WBracketLeftW extends _token_1.Token {
    static railroad() {
        return " [ ";
    }
}
exports.WBracketLeftW = WBracketLeftW;
