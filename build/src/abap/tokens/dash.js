"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _token_1 = require("./_token");
class Dash extends _token_1.Token {
    static railroad() {
        return "-";
    }
}
exports.Dash = Dash;
class WDash extends _token_1.Token {
    static railroad() {
        return " -";
    }
}
exports.WDash = WDash;
class DashW extends _token_1.Token {
    static railroad() {
        return "- ";
    }
}
exports.DashW = DashW;
class WDashW extends _token_1.Token {
    static railroad() {
        return " - ";
    }
}
exports.WDashW = WDashW;
