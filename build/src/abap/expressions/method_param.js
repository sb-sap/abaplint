"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const method_param_name_1 = require("./method_param_name");
const tokens_1 = require("../tokens/");
class MethodParam extends combi_1.Expression {
    getRunnable() {
        const ref = combi_1.seq(combi_1.str("REFERENCE"), combi_1.tok(tokens_1.ParenLeft), new method_param_name_1.MethodParamName(), combi_1.tok(tokens_1.ParenRightW));
        const value = combi_1.seq(combi_1.str("VALUE"), combi_1.tok(tokens_1.ParenLeft), new method_param_name_1.MethodParamName(), combi_1.tok(tokens_1.ParenRightW));
        const fieldsOrValue = combi_1.seq(combi_1.alt(value, ref, new method_param_name_1.MethodParamName()), new _1.TypeParam());
        return fieldsOrValue;
    }
}
exports.MethodParam = MethodParam;
