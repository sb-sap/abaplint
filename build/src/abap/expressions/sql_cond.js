"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class SQLCond extends combi_1.Expression {
    getRunnable() {
        const operator = combi_1.alt(combi_1.str("AND"), combi_1.str("OR"));
        const paren = combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), new SQLCond(), combi_1.tok(tokens_1.WParenRightW));
        const cnd = combi_1.seq(combi_1.optPrio(combi_1.str("NOT")), combi_1.alt(new _1.SQLCompare(), paren));
        const ret = combi_1.seq(cnd, combi_1.star(combi_1.seq(operator, cnd)));
        return ret;
    }
}
exports.SQLCond = SQLCond;
