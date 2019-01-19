"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
class MethodSource extends combi_1.Expression {
    getRunnable() {
        const mname = combi_1.alt(new expressions_1.MethodName(), new expressions_1.Dynamic());
        const cname = combi_1.alt(new expressions_1.FieldChain(), new expressions_1.MethodCallChain(), new expressions_1.Dynamic());
        return combi_1.seq(combi_1.opt(combi_1.seq(cname, combi_1.alt(combi_1.tok(tokens_1.InstanceArrow), combi_1.tok(tokens_1.StaticArrow)))), mname);
    }
}
exports.MethodSource = MethodSource;
