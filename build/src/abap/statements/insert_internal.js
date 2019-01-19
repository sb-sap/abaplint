"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class InsertInternal extends _statement_1.Statement {
    getMatcher() {
        const target = combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic());
        const assigning = combi_1.seq(combi_1.str("ASSIGNING"), new expressions_1.FSTarget());
        const ref = combi_1.seq(combi_1.str("REFERENCE INTO"), new expressions_1.Target());
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const initial = combi_1.str("INITIAL LINE");
        const into = combi_1.seq(combi_1.str("INTO"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.Target());
        const to = combi_1.seq(combi_1.str("TO"), new expressions_1.Source());
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source(), combi_1.opt(to));
        const foo = combi_1.per(into, ref, index, assigning);
        const lines = combi_1.seq(combi_1.opt(combi_1.str("LINES OF")), target, combi_1.opt(from));
        const ret = combi_1.seq(combi_1.str("INSERT"), combi_1.alt(initial, new expressions_1.Source(), lines), foo);
        return ret;
    }
}
exports.InsertInternal = InsertInternal;
