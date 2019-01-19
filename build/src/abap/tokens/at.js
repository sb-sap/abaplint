"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class At extends _token_1.Token {
    static railroad() {
        return "@";
    }
}
exports.At = At;
class WAt extends _token_1.Token {
    static railroad() {
        return " @";
    }
}
exports.WAt = WAt;
class AtW extends _token_1.Token {
    static railroad() {
        return "@ ";
    }
}
exports.AtW = AtW;
class WAtW extends _token_1.Token {
    static railroad() {
        return " @ ";
    }
}
exports.WAtW = WAtW;
