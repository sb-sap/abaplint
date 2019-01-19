"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class TypeEnd extends _statement_1.Statement {
    getMatcher() {
        const end = combi_1.seq(combi_1.str("END OF"), new expressions_1.NamespaceSimpleName());
        const ret = combi_1.seq(combi_1.alt(combi_1.str("TYPE"), combi_1.str("TYPES")), end);
        return ret;
    }
}
exports.TypeEnd = TypeEnd;
