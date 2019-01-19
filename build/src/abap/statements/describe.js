"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Describe extends _statement_1.Statement {
    getMatcher() {
        const tlines = combi_1.seq(combi_1.str("LINES"), new expressions_1.Target());
        const kind = combi_1.seq(combi_1.str("KIND"), new expressions_1.Target());
        const occurs = combi_1.seq(combi_1.str("OCCURS"), new expressions_1.Target());
        const table = combi_1.seq(combi_1.str("TABLE"), new expressions_1.Source(), combi_1.opt(combi_1.per(tlines, kind, occurs)));
        const mode = combi_1.seq(combi_1.str("IN"), combi_1.alt(combi_1.str("BYTE"), combi_1.str("CHARACTER")), combi_1.str("MODE"));
        const field = combi_1.seq(combi_1.str("FIELD"), new expressions_1.Source(), combi_1.per(combi_1.seq(combi_1.str("TYPE"), new expressions_1.Target()), combi_1.seq(combi_1.str("COMPONENTS"), new expressions_1.Target()), combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Target(), combi_1.opt(mode)), combi_1.seq(combi_1.str("DECIMALS"), new expressions_1.Target()), combi_1.seq(combi_1.str("HELP-ID"), new expressions_1.Target()), combi_1.seq(combi_1.str("OUTPUT-LENGTH"), new expressions_1.Target()), combi_1.seq(combi_1.str("EDIT MASK"), new expressions_1.Target()), combi_1.seq(combi_1.str("INTO"), new expressions_1.Target())));
        const distance = combi_1.seq(combi_1.str("DISTANCE BETWEEN"), new expressions_1.Source(), combi_1.str("AND"), new expressions_1.Source(), combi_1.str("INTO"), new expressions_1.Target(), mode);
        const lines = combi_1.seq(combi_1.str("NUMBER OF LINES"), new expressions_1.Target());
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Source());
        const page = combi_1.seq(combi_1.str("PAGE"), new expressions_1.Source());
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Target());
        const top = combi_1.seq(combi_1.str("TOP-LINES"), new expressions_1.Target());
        const list = combi_1.seq(combi_1.str("LIST"), combi_1.per(lines, index, line, page, top));
        const ret = combi_1.seq(combi_1.str("DESCRIBE"), combi_1.alt(table, field, distance, list));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Describe = Describe;
