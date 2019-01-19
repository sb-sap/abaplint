"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ClassDataEnd extends _statement_1.Statement {
    getMatcher() {
        const common = combi_1.seq(combi_1.str("COMMON PART"), combi_1.optPrio(new expressions_1.SimpleName()));
        const structure = combi_1.seq(combi_1.str("END OF"), combi_1.alt(common, new expressions_1.NamespaceSimpleName()));
        return combi_1.seq(combi_1.str("CLASS-DATA"), structure);
    }
}
exports.ClassDataEnd = ClassDataEnd;
