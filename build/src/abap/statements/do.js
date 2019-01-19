"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Do extends _statement_1.Statement {
    getMatcher() {
        const range = combi_1.seq(combi_1.str("RANGE"), new expressions_1.Source());
        const vary = combi_1.seq(combi_1.str("VARYING"), new expressions_1.Target(), combi_1.str("FROM"), new expressions_1.Source(), combi_1.str("NEXT"), new expressions_1.Source(), combi_1.opt(range));
        const times = combi_1.seq(new expressions_1.Source(), combi_1.str("TIMES"));
        return combi_1.seq(combi_1.str("DO"), combi_1.opt(combi_1.per(combi_1.plus(vary), times)));
    }
}
exports.Do = Do;
