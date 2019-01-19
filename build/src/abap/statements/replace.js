"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Replace extends _statement_1.Statement {
    getMatcher() {
        const length = combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Source());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Source());
        const section = combi_1.seq(combi_1.opt(combi_1.str("IN")), combi_1.str("SECTION"), combi_1.per(offset, length), combi_1.str("OF"), new expressions_1.Source());
        const source = combi_1.seq(combi_1.opt(combi_1.str("OF")), combi_1.opt(combi_1.alt(combi_1.str("REGEX"), combi_1.str("SUBSTRING"))), new expressions_1.Source());
        const cas = combi_1.alt(combi_1.str("IGNORING CASE"), combi_1.str("RESPECTING CASE"));
        const repl = combi_1.seq(combi_1.str("REPLACEMENT COUNT"), new expressions_1.Target());
        const replo = combi_1.seq(combi_1.str("REPLACEMENT OFFSET"), new expressions_1.Target());
        const repll = combi_1.seq(combi_1.str("REPLACEMENT LENGTH"), new expressions_1.Target());
        const occ = combi_1.alt(combi_1.str("ALL OCCURRENCES"), combi_1.str("ALL OCCURENCES"), combi_1.str("FIRST OCCURRENCE"));
        const mode = combi_1.alt(combi_1.str("IN CHARACTER MODE"), combi_1.str("IN BYTE MODE"));
        const wit = combi_1.seq(combi_1.str("WITH"), new expressions_1.Source());
        const into = combi_1.seq(combi_1.str("INTO"), new expressions_1.Target());
        return combi_1.seq(combi_1.str("REPLACE"), combi_1.per(section, combi_1.seq(combi_1.opt(occ), source)), combi_1.opt(combi_1.seq(combi_1.str("IN"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.Target())), combi_1.opt(combi_1.per(wit, into, cas, mode, repl, replo, repll, length)));
    }
}
exports.Replace = Replace;
