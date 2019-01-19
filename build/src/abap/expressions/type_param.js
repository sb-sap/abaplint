"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class TypeParam extends combi_1.Expression {
    getRunnable() {
        const def = combi_1.seq(combi_1.str("DEFAULT"), combi_1.alt(new _1.Constant(), new _1.FieldChain()));
        const table = combi_1.seq(combi_1.alt(combi_1.str("STANDARD"), combi_1.str("HASHED"), combi_1.str("INDEX"), combi_1.str("SORTED"), combi_1.str("ANY")), combi_1.str("TABLE"));
        const foo = combi_1.seq(combi_1.opt(combi_1.seq(table, combi_1.str("OF"))), combi_1.opt(combi_1.str("REF TO")));
        const typeLine = combi_1.str("LINE OF");
        const ret = combi_1.seq(combi_1.alt(foo, typeLine), new _1.TypeName(), combi_1.opt(def));
        const like = combi_1.seq(combi_1.str("LIKE"), combi_1.opt(combi_1.str("LINE OF")), new _1.FieldChain(), combi_1.opt(def));
        return combi_1.alt(combi_1.seq(combi_1.str("TYPE"), combi_1.alt(table, ret)), like);
    }
}
exports.TypeParam = TypeParam;
