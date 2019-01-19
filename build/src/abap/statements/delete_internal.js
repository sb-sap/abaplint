"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const expressions_2 = require("../expressions");
class DeleteInternal extends _statement_1.Statement {
    getMatcher() {
        // todo, is READ and DELETE similar? something can be reused?
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_2.Source());
        const using = combi_1.seq(combi_1.str("USING KEY"), combi_1.alt(new expressions_2.SimpleName(), new expressions_2.Dynamic()));
        const fromTo = combi_1.seq(combi_1.opt(combi_1.seq(combi_1.str("FROM"), new expressions_2.Source())), combi_1.opt(combi_1.seq(combi_1.str("TO"), new expressions_2.Source())));
        const where = combi_1.seq(combi_1.str("WHERE"), combi_1.alt(new expressions_2.ComponentCond(), new expressions_2.Dynamic()));
        const key = combi_1.seq(combi_1.str("WITH TABLE KEY"), combi_1.opt(combi_1.seq(new expressions_2.SimpleName(), combi_1.str("COMPONENTS"))), combi_1.plus(new expressions_2.ComponentCompare()));
        const table = combi_1.seq(combi_1.opt(combi_1.str("TABLE")), new expressions_2.Target(), combi_1.alt(combi_1.per(index, using), fromTo, key), combi_1.opt(where));
        const adjacent = combi_1.seq(combi_1.str("ADJACENT DUPLICATES FROM"), new expressions_2.Target(), combi_1.opt(combi_1.seq(combi_1.str("COMPARING"), combi_1.plus(combi_1.alt(new expressions_2.FieldSub(), new expressions_2.Dynamic())))), combi_1.opt(combi_1.seq(combi_1.str("USING KEY"), new expressions_2.Field())));
        const fs = combi_1.seq(new expressions_1.FieldSymbol(), where);
        return combi_1.seq(combi_1.str("DELETE"), combi_1.alt(table, adjacent, fs));
    }
}
exports.DeleteInternal = DeleteInternal;
