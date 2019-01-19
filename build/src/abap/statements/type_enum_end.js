"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class TypeEnumEnd extends _statement_1.Statement {
    getMatcher() {
        const structure = combi_1.seq(combi_1.str("STRUCTURE"), new expressions_1.NamespaceSimpleName());
        const em = combi_1.seq(combi_1.str("ENUM"), new expressions_1.NamespaceSimpleName(), combi_1.opt(structure));
        const end = combi_1.seq(combi_1.str("END OF"), em);
        const ret = combi_1.seq(combi_1.str("TYPES"), end);
        return ret;
    }
}
exports.TypeEnumEnd = TypeEnumEnd;
