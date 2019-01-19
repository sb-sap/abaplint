"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const tokens_1 = require("../tokens/");
const sql_source_1 = require("./sql_source");
const version_1 = require("../../version");
class SQLCompare extends combi_1.Expression {
    getRunnable() {
        const val = new sql_source_1.SQLSource();
        const list = combi_1.seq(combi_1.alt(combi_1.tok(tokens_1.WParenLeft), combi_1.tok(tokens_1.WParenLeftW)), val, combi_1.star(combi_1.seq(combi_1.str(","), val)), combi_1.str(")"));
        const subSelect = combi_1.seq(combi_1.str("("), new _1.Select(), combi_1.str(")"));
        const inn = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.str("IN"), combi_1.alt(new sql_source_1.SQLSource(), list, subSelect));
        const operator = combi_1.alt(combi_1.str("="), combi_1.str("<>"), combi_1.str("><"), combi_1.str("<"), combi_1.str(">"), combi_1.str("<="), combi_1.str("=>"), combi_1.str(">="), combi_1.str("EQ"), combi_1.str("NE"), combi_1.str("GE"), combi_1.str("GT"), combi_1.str("LT"), combi_1.str("LE"));
        const between = combi_1.seq(combi_1.str("BETWEEN"), new sql_source_1.SQLSource(), combi_1.str("AND"), new sql_source_1.SQLSource());
        const like = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.str("LIKE"), new sql_source_1.SQLSource(), combi_1.optPrio(combi_1.seq(combi_1.str("ESCAPE"), new sql_source_1.SQLSource())));
        const nul = combi_1.seq(combi_1.str("IS"), combi_1.opt(combi_1.str("NOT")), combi_1.str("NULL"));
        const source = new sql_source_1.SQLSource();
        const sub = combi_1.seq(combi_1.opt(combi_1.alt(combi_1.str("ALL"), combi_1.str("ANY"), combi_1.str("SOME"))), subSelect);
        const builtin = combi_1.ver(version_1.Version.v751, combi_1.seq(combi_1.alt(combi_1.str("lower"), combi_1.str("upper")), combi_1.tok(tokens_1.ParenLeftW), new _1.SQLFieldName(), combi_1.tok(tokens_1.WParenRightW)));
        const rett = combi_1.seq(combi_1.alt(new _1.SQLFieldName(), builtin), combi_1.alt(combi_1.seq(operator, combi_1.alt(source, sub)), inn, like, between, nul));
        const ret = rett;
        const exists = combi_1.seq(combi_1.str("EXISTS"), subSelect);
        return combi_1.alt(ret, new _1.Dynamic(), exists);
    }
}
exports.SQLCompare = SQLCompare;
