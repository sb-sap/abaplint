"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Sort extends _statement_1.Statement {
    getMatcher() {
        const order = combi_1.alt(combi_1.str("ASCENDING"), combi_1.str("DESCENDING"));
        const sel = combi_1.alt(new expressions_1.FieldChain(), new expressions_1.FieldSymbol(), new expressions_1.Dynamic());
        const fields = combi_1.plus(combi_1.seq(sel, combi_1.optPrio(order)));
        const by = combi_1.seq(combi_1.str("BY"), fields);
        const normal = combi_1.seq(new expressions_1.Target(), combi_1.opt(combi_1.per(order, by, combi_1.str("STABLE"), combi_1.str("AS TEXT"))));
        const target = combi_1.alt(normal, combi_1.str("AS TEXT"));
        return combi_1.seq(combi_1.str("SORT"), target);
    }
}
exports.Sort = Sort;
