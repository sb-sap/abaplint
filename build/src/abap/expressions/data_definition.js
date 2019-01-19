"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const Expressions = require("../expressions");
const expressions_1 = require("../expressions");
class DataDefinition extends combi_1.Expression {
    getRunnable() {
        const occurs = combi_1.seq(combi_1.str("OCCURS"), new expressions_1.Integer());
        const initial = combi_1.seq(combi_1.str("INITIAL SIZE"), new Expressions.Integer());
        const simple = combi_1.opt(combi_1.per(combi_1.str("READ-ONLY"), occurs, initial, combi_1.str("WITH HEADER LINE"), new Expressions.Type(), 
        //                           new Expressions.TypeTable(),
        new Expressions.Length(), new Expressions.Decimals(), new Expressions.Value()));
        const table = combi_1.seq(new Expressions.TypeTable(), combi_1.opt(combi_1.str("READ-ONLY")), combi_1.opt(initial));
        return combi_1.seq(new Expressions.NamespaceSimpleName(), combi_1.opt(new Expressions.FieldLength()), combi_1.alt(simple, table));
    }
}
exports.DataDefinition = DataDefinition;
