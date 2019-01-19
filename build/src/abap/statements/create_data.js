"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class CreateData extends _statement_1.Statement {
    getMatcher() {
        // todo, similar to DATA or TYPES?
        const area = combi_1.seq(combi_1.str("AREA HANDLE"), new expressions_1.Source());
        const type = combi_1.alt(combi_1.str("LIKE"), combi_1.str("TYPE"), combi_1.str("TYPE HANDLE"), combi_1.str("TYPE REF TO"), combi_1.str("LIKE TABLE OF"), combi_1.str("TYPE TABLE OF"), combi_1.str("TYPE SORTED TABLE OF"), combi_1.str("LIKE SORTED TABLE OF"), combi_1.str("LIKE HASHED TABLE OF"), combi_1.str("TYPE HASHED TABLE OF"), combi_1.str("TYPE STANDARD TABLE OF"), combi_1.str("LIKE STANDARD TABLE OF"), combi_1.str("LIKE LINE OF"), combi_1.str("TYPE LINE OF"));
        const length = combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Source());
        const initial = combi_1.seq(combi_1.str("INITIAL SIZE"), new expressions_1.Source());
        const decimals = combi_1.seq(combi_1.str("DECIMALS"), new expressions_1.Source());
        const uniq = combi_1.alt(combi_1.str("UNIQUE"), combi_1.str("NON-UNIQUE"));
        const def = combi_1.seq(combi_1.opt(uniq), combi_1.str("DEFAULT KEY"));
        const kdef = combi_1.seq(uniq, combi_1.str("KEY"), combi_1.alt(combi_1.plus(new expressions_1.Field()), new expressions_1.Dynamic()));
        const key = combi_1.seq(combi_1.str("WITH"), combi_1.alt(def, kdef));
        const ret = combi_1.seq(combi_1.str("CREATE DATA"), new expressions_1.Target(), combi_1.opt(area), combi_1.opt(combi_1.seq(type, combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic()))), combi_1.opt(key), combi_1.opt(initial), combi_1.opt(length), combi_1.opt(decimals));
        return ret;
    }
}
exports.CreateData = CreateData;
