"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class SQLFrom extends combi_1.Expression {
    getRunnable() {
        const from = combi_1.seq(combi_1.str("FROM"), combi_1.star(combi_1.tok(tokens_1.WParenLeftW)), new _1.SQLFromSource());
        const source = combi_1.seq(from, combi_1.star(combi_1.seq(combi_1.opt(combi_1.tok(tokens_1.WParenRightW)), new _1.SQLJoin(), combi_1.opt(combi_1.tok(tokens_1.WParenRightW)))));
        return source;
    }
}
exports.SQLFrom = SQLFrom;
