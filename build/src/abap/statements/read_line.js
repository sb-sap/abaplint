"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class ReadLine extends _statement_1.Statement {
    getMatcher() {
        const val = combi_1.seq(combi_1.str("LINE VALUE INTO"), new expressions_1.Target());
        const fields = combi_1.seq(new expressions_1.Target(), combi_1.opt(combi_1.seq(combi_1.str("INTO"), new expressions_1.Target())));
        const field = combi_1.seq(combi_1.str("FIELD VALUE"), combi_1.plus(fields));
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const page = combi_1.seq(combi_1.str("OF PAGE"), new expressions_1.Source());
        const current = combi_1.str("OF CURRENT PAGE");
        const ret = combi_1.seq(combi_1.str("READ"), combi_1.alt(combi_1.str("CURRENT LINE"), combi_1.seq(combi_1.str("LINE"), new expressions_1.Source())), combi_1.opt(combi_1.per(val, index, field, page, current)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.ReadLine = ReadLine;
