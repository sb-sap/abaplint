"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const version_1 = require("../../version");
const field_chain_1 = require("./field_chain");
class TypeTable extends combi_1.Expression {
    getRunnable() {
        const likeType = combi_1.alt(combi_1.str("LIKE"), combi_1.str("TYPE"));
        const header = combi_1.str("WITH HEADER LINE");
        const initial = combi_1.seq(combi_1.str("INITIAL SIZE"), new _1.Constant());
        const key = combi_1.seq(combi_1.str("WITH"), combi_1.opt(combi_1.alt(combi_1.str("NON-UNIQUE"), combi_1.str("UNIQUE"))), combi_1.opt(combi_1.alt(combi_1.str("DEFAULT"), combi_1.str("SORTED"), combi_1.ver(version_1.Version.v740sp02, combi_1.str("EMPTY")))), combi_1.str("KEY"), combi_1.star(new _1.FieldSub()));
        const normal = combi_1.seq(combi_1.opt(combi_1.alt(combi_1.str("STANDARD"), combi_1.str("HASHED"), combi_1.str("INDEX"), combi_1.str("SORTED"), combi_1.str("ANY"))), combi_1.str("TABLE"), combi_1.opt(combi_1.str("OF")), combi_1.opt(combi_1.str("REF TO")), combi_1.opt(new field_chain_1.FieldChain()));
        const range = combi_1.seq(combi_1.str("RANGE OF"), new field_chain_1.FieldChain());
        const typetable = combi_1.seq(combi_1.alt(normal, range), combi_1.opt(combi_1.per(header, initial)), combi_1.opt(key));
        const occurs = combi_1.seq(combi_1.str("OCCURS"), new _1.Integer());
        const old = combi_1.seq(new _1.TypeName(), combi_1.alt(combi_1.seq(occurs, combi_1.opt(header)), header));
        const ret = combi_1.seq(likeType, combi_1.alt(old, typetable));
        return ret;
    }
}
exports.TypeTable = TypeTable;
