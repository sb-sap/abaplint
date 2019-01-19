"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class FieldSymbol extends _statement_1.Statement {
    getMatcher() {
        // todo, reuse type definition from DATA
        return combi_1.seq(combi_1.alt(combi_1.str("FIELD-SYMBOL"), combi_1.str("FIELD-SYMBOLS")), new expressions_1.FieldSymbol(), combi_1.star(combi_1.regex(/^.*$/)));
    }
}
exports.FieldSymbol = FieldSymbol;
