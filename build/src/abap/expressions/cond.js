"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class Cond extends combi_1.Expression {
    getRunnable() {
        const operator = combi_1.alt(combi_1.str("AND"), combi_1.str("OR"));
        const another = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.tok(tokens_1.WParenLeftW), new Cond(), combi_1.tok(tokens_1.WParenRightW));
        const cnd = combi_1.alt(new _1.Compare(), another);
        const ret = combi_1.seq(cnd, combi_1.star(combi_1.seq(operator, cnd)));
        return ret;
    }
}
exports.Cond = Cond;
