"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class FormParamType extends combi_1.Expression {
    getRunnable() {
        const def = combi_1.seq(combi_1.str("DEFAULT"), combi_1.alt(new _1.Constant(), new _1.FieldChain()));
        const table = combi_1.seq(combi_1.alt(combi_1.str("STANDARD"), combi_1.str("HASHED"), combi_1.str("INDEX"), combi_1.str("SORTED"), combi_1.str("ANY")), combi_1.str("TABLE"));
        const tabseq = combi_1.seq(table, combi_1.optPrio(combi_1.seq(combi_1.str("OF"), new _1.TypeName())));
        const ret = combi_1.seq(combi_1.optPrio(combi_1.str("REF TO")), new _1.TypeName(), combi_1.opt(def));
        const like = combi_1.seq(combi_1.str("LIKE"), new _1.FieldChain(), combi_1.opt(new _1.TableBody()));
        return combi_1.alt(combi_1.seq(combi_1.str("TYPE"), combi_1.altPrio(tabseq, ret)), like);
    }
}
exports.FormParamType = FormParamType;
