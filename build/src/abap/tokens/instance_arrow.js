"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class InstanceArrow extends _token_1.Token {
    static railroad() {
        return "->";
    }
}
exports.InstanceArrow = InstanceArrow;
class WInstanceArrow extends _token_1.Token {
    static railroad() {
        return " ->";
    }
}
exports.WInstanceArrow = WInstanceArrow;
class InstanceArrowW extends _token_1.Token {
    static railroad() {
        return "-> ";
    }
}
exports.InstanceArrowW = InstanceArrowW;
class WInstanceArrowW extends _token_1.Token {
    static railroad() {
        return " -> ";
    }
}
exports.WInstanceArrowW = WInstanceArrowW;
