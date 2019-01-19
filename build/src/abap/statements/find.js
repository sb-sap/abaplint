"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Find extends _statement_1.Statement {
    getMatcher() {
        const options = combi_1.per(combi_1.str("IGNORING CASE"), combi_1.str("RESPECTING CASE"), combi_1.str("IN BYTE MODE"), combi_1.str("IN CHARACTER MODE"), combi_1.seq(combi_1.str("OF"), new expressions_1.Source()), combi_1.seq(combi_1.str("FROM"), new expressions_1.Source()), combi_1.seq(combi_1.str("MATCH OFFSET"), new expressions_1.Target()), combi_1.seq(combi_1.str("MATCH LINE"), new expressions_1.Target()), combi_1.seq(combi_1.str("MATCH COUNT"), new expressions_1.Target()), combi_1.seq(combi_1.str("MATCH LENGTH"), new expressions_1.Target()), combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Source()), combi_1.seq(combi_1.str("RESULTS"), new expressions_1.Target()), combi_1.seq(combi_1.str("SUBMATCHES"), combi_1.plus(new expressions_1.Target())));
        const sectionLength = combi_1.seq(combi_1.str("SECTION LENGTH"), new expressions_1.Source(), combi_1.str("OF"));
        const before = combi_1.seq(combi_1.opt(combi_1.alt(combi_1.str("TABLE"), combi_1.str("SECTION OFFSET"), sectionLength)), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("FIND"), combi_1.opt(combi_1.alt(combi_1.str("FIRST OCCURRENCE OF"), combi_1.str("ALL OCCURRENCES OF"))), combi_1.opt(combi_1.alt(combi_1.str("REGEX"), combi_1.str("SUBSTRING"))), new expressions_1.Source(), combi_1.str("IN"), before, combi_1.opt(options));
        return ret;
    }
}
exports.Find = Find;
