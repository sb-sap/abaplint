"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
class MethodCallBody extends combi_1.Expression {
    getRunnable() {
        const paren = combi_1.seq(combi_1.tok(tokens_1.ParenLeftW), combi_1.alt(new expressions_1.Source(), new expressions_1.ParameterListS(), new expressions_1.MethodParameters()), combi_1.str(")"));
        const dynamicPar = combi_1.seq(combi_1.str("PARAMETER-TABLE"), new expressions_1.Source());
        const dynamicExc = combi_1.seq(combi_1.str("EXCEPTION-TABLE"), new expressions_1.Source());
        const dynamic = combi_1.seq(dynamicPar, combi_1.opt(dynamicExc));
        return combi_1.alt(paren, new expressions_1.MethodParameters(), dynamic);
    }
}
exports.MethodCallBody = MethodCallBody;
