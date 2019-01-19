"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
const version_1 = require("../../version");
const class_name_1 = require("./class_name");
class MethodCallChain extends combi_1.Expression {
    getRunnable() {
        const fields = combi_1.star(combi_1.seq(new _1.ArrowOrDash(), new _1.Field()));
        const after = combi_1.star(combi_1.seq(fields, combi_1.tok(tokens_1.InstanceArrow), new _1.MethodCall()));
        const rparen = combi_1.alt(combi_1.tok(tokens_1.WParenRightW), combi_1.tok(tokens_1.WParenRight));
        const lines = combi_1.plus(combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), new _1.Source(), combi_1.tok(tokens_1.WParenRightW)));
        const neww = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("NEW"), new _1.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(combi_1.alt(new _1.Source(), new _1.ParameterListS(), lines)), rparen));
        const cast = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("CAST"), new _1.TypeName(), combi_1.tok(tokens_1.ParenLeftW), new _1.Source(), rparen));
        const localVariable = combi_1.seq(new _1.FieldChain(), combi_1.tok(tokens_1.InstanceArrow));
        const staticClass = combi_1.seq(new class_name_1.ClassName(), combi_1.tok(tokens_1.StaticArrow));
        const ret = combi_1.seq(combi_1.alt(combi_1.seq(combi_1.opt(combi_1.alt(localVariable, staticClass)), new _1.MethodCall()), neww, cast), after);
        return ret;
    }
}
exports.MethodCallChain = MethodCallChain;
