"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const tokens_1 = require("../tokens/");
const version_1 = require("../../version");
const field_chain_1 = require("./field_chain");
class ComponentCompare extends combi_1.Expression {
    getRunnable() {
        const val = combi_1.alt(new _1.FieldSub(), new _1.Constant());
        const list = combi_1.seq(combi_1.tok(tokens_1.WParenLeft), val, combi_1.plus(combi_1.seq(combi_1.str(","), val)), combi_1.tok(tokens_1.ParenRightW));
        const inn = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.str("IN"), combi_1.alt(new _1.Source(), list));
        const sopt = combi_1.seq(combi_1.str("IS"), combi_1.opt(combi_1.str("NOT")), combi_1.alt(combi_1.str("SUPPLIED"), combi_1.str("BOUND"), combi_1.ver(version_1.Version.v750, combi_1.seq(combi_1.str("INSTANCE OF"), new _1.Source())), combi_1.str("REQUESTED"), combi_1.str("ASSIGNED"), combi_1.str("INITIAL")));
        const between = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.str("BETWEEN"), new _1.Source(), combi_1.str("AND"), new _1.Source());
        const rett = combi_1.seq(new field_chain_1.FieldChain(), combi_1.alt(combi_1.seq(new _1.CompareOperator(), new _1.Source()), inn, between, sopt));
        const ret = combi_1.seq(combi_1.opt(combi_1.str("NOT")), rett);
        return ret;
    }
}
exports.ComponentCompare = ComponentCompare;
