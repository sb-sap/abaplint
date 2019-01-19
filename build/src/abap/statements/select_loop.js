"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const expressions_1 = require("../expressions");
class SelectLoop extends _statement_1.Statement {
    getMatcher() {
        return new expressions_1.SelectLoop();
    }
}
exports.SelectLoop = SelectLoop;
