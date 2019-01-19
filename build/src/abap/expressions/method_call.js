"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class MethodCall extends combi_1.Expression {
    getRunnable() {
        const white = combi_1.seq(combi_1.tok(tokens_1.ParenLeftW), combi_1.alt(new _1.Source(), new _1.ParameterListS(), new _1.MethodParameters()));
        const ret = combi_1.seq(new _1.MethodName(), white, combi_1.alt(combi_1.tok(tokens_1.WParenRight), combi_1.tok(tokens_1.WParenRightW)));
        return ret;
    }
}
exports.MethodCall = MethodCall;
