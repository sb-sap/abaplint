"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class SQLJoin extends combi_1.Expression {
    getRunnable() {
        const joinType = combi_1.seq(combi_1.opt(combi_1.alt(combi_1.str("INNER"), combi_1.str("LEFT OUTER"), combi_1.str("LEFT"))), combi_1.str("JOIN"));
        const join = combi_1.seq(joinType, new _1.SQLFromSource(), combi_1.str("ON"), combi_1.plus(new _1.SQLCond()));
        return join;
    }
}
exports.SQLJoin = SQLJoin;
