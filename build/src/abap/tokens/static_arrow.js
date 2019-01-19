"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class StaticArrow extends _token_1.Token {
    static railroad() {
        return "=>";
    }
}
exports.StaticArrow = StaticArrow;
class WStaticArrow extends _token_1.Token {
    static railroad() {
        return " =>";
    }
}
exports.WStaticArrow = WStaticArrow;
class StaticArrowW extends _token_1.Token {
    static railroad() {
        return "=> ";
    }
}
exports.StaticArrowW = StaticArrowW;
class WStaticArrowW extends _token_1.Token {
    static railroad() {
        return " => ";
    }
}
exports.WStaticArrowW = WStaticArrowW;
