"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Type extends _statement_1.Statement {
    getMatcher() {
        const simple = combi_1.per(new expressions_1.Type(), new expressions_1.Decimals(), new expressions_1.Length());
        const def = combi_1.seq(new expressions_1.NamespaceSimpleName(), combi_1.opt(new expressions_1.FieldLength()), combi_1.opt(combi_1.alt(simple, new expressions_1.TypeTable())));
        const ret = combi_1.seq(combi_1.alt(combi_1.str("TYPE"), combi_1.str("TYPES")), def);
        return ret;
    }
}
exports.Type = Type;
