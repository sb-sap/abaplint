"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Split extends _statement_1.Statement {
    getMatcher() {
        const mode = combi_1.str("IN CHARACTER MODE");
        const into = combi_1.altPrio(combi_1.seq(combi_1.str("TABLE"), new expressions_1.Target(), combi_1.opt(mode)), combi_1.plus(new expressions_1.Target()));
        const ret = combi_1.seq(combi_1.str("SPLIT"), new expressions_1.Source(), combi_1.str("AT"), new expressions_1.Source(), combi_1.str("INTO"), into);
        return ret;
    }
}
exports.Split = Split;
