"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class DataBegin extends _statement_1.Statement {
    getMatcher() {
        const occurs = combi_1.seq(combi_1.str("OCCURS"), new expressions_1.Integer());
        const structure = combi_1.seq(combi_1.str("BEGIN OF"), combi_1.opt(combi_1.str("COMMON PART")), new expressions_1.NamespaceSimpleName(), combi_1.opt(combi_1.str("READ-ONLY")), combi_1.opt(occurs));
        return combi_1.seq(combi_1.str("DATA"), structure);
    }
}
exports.DataBegin = DataBegin;
