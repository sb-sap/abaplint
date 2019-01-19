"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ModifyInternal extends _statement_1.Statement {
    getMatcher() {
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const transporting = combi_1.seq(combi_1.str("TRANSPORTING"), combi_1.plus(combi_1.alt(new expressions_1.FieldSub(), new expressions_1.Dynamic())));
        const where = combi_1.seq(combi_1.str("WHERE"), new expressions_1.ComponentCond());
        const assigning = combi_1.seq(combi_1.str("ASSIGNING"), new expressions_1.FSTarget());
        const using = combi_1.seq(combi_1.str("USING KEY"), new expressions_1.SimpleName());
        const additions = combi_1.per(where, assigning, using);
        const target = combi_1.alt(new expressions_1.Target(), new expressions_1.Dynamic());
        const options = combi_1.alt(combi_1.per(index, transporting), combi_1.seq(from, combi_1.per(index, transporting)), combi_1.seq(combi_1.per(index, transporting), from, combi_1.opt(combi_1.per(index, transporting))));
        const long = combi_1.seq(combi_1.str("MODIFY"), combi_1.opt(combi_1.str("TABLE")), target, combi_1.opt(options), combi_1.opt(additions));
        const simple = combi_1.seq(combi_1.str("MODIFY TABLE"), target, from, combi_1.opt(using));
        return combi_1.alt(long, simple);
    }
}
exports.ModifyInternal = ModifyInternal;
