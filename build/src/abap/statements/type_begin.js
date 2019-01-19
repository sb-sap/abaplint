"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class TypeBegin extends _statement_1.Statement {
    getMatcher() {
        const begin = combi_1.seq(combi_1.str("BEGIN OF"), new expressions_1.NamespaceSimpleName());
        const ret = combi_1.seq(combi_1.alt(combi_1.str("TYPE"), combi_1.str("TYPES")), begin);
        return ret;
    }
}
exports.TypeBegin = TypeBegin;
