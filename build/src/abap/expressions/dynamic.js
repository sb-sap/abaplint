"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class Dynamic extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.seq(combi_1.alt(combi_1.tok(tokens_1.WParenLeft), combi_1.tok(tokens_1.ParenLeft)), combi_1.alt(new _1.FieldChain(), new _1.Constant()), combi_1.alt(combi_1.tok(tokens_1.ParenRightW), combi_1.tok(tokens_1.ParenRight)));
        return ret;
    }
}
exports.Dynamic = Dynamic;
