"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class SQLAggregation extends combi_1.Expression {
    getRunnable() {
        const count = combi_1.seq(combi_1.str("COUNT"), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.ParenLeftW)), combi_1.opt(combi_1.str("DISTINCT")), combi_1.alt(combi_1.str("*"), new _1.Field()), combi_1.str(")"));
        const max = combi_1.seq(combi_1.str("MAX"), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.ParenLeftW)), new _1.Field(), combi_1.str(")"));
        const min = combi_1.seq(combi_1.str("MIN"), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.ParenLeftW)), new _1.Field(), combi_1.str(")"));
        const sum = combi_1.seq(combi_1.str("SUM"), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.ParenLeftW)), new _1.Field(), combi_1.str(")"));
        const avg = combi_1.seq(combi_1.str("AVG"), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.ParenLeftW)), new _1.Field(), combi_1.str(")"));
        return combi_1.alt(count, max, min, sum, avg);
    }
}
exports.SQLAggregation = SQLAggregation;
