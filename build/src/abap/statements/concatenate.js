"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Concatenate extends _statement_1.Statement {
    getMatcher() {
        const mode = combi_1.seq(combi_1.str("IN"), combi_1.alt(combi_1.str("BYTE"), combi_1.str("CHARACTER")), combi_1.str("MODE"));
        const blanks = combi_1.str("RESPECTING BLANKS");
        const sep = combi_1.seq(combi_1.str("SEPARATED BY"), new expressions_1.Source());
        const options = combi_1.per(mode, blanks, sep);
        const sourc = combi_1.seq(new expressions_1.Source(), combi_1.plus(new expressions_1.Source()));
        const lines = combi_1.seq(combi_1.str("LINES OF"), new expressions_1.Source());
        return combi_1.seq(combi_1.str("CONCATENATE"), combi_1.altPrio(lines, sourc), combi_1.str("INTO"), new expressions_1.Target(), combi_1.opt(options));
    }
}
exports.Concatenate = Concatenate;
