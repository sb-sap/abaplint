"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Check extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("CHECK"), new expressions_1.Cond());
        return ret;
    }
}
exports.Check = Check;
