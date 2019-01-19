"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SortDataset extends _statement_1.Statement {
    getMatcher() {
        const order = combi_1.alt(combi_1.str("ASCENDING"), combi_1.str("DESCENDING"));
        const sel = combi_1.alt(new expressions_1.FieldSub(), new expressions_1.FieldSymbol(), new expressions_1.Dynamic());
        const fields = combi_1.plus(combi_1.seq(sel, combi_1.optPrio(order)));
        const by = combi_1.seq(combi_1.str("BY"), fields);
        const ret = combi_1.seq(combi_1.str("SORT"), combi_1.opt(by));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SortDataset = SortDataset;
