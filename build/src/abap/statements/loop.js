"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
const tokens_1 = require("../tokens");
class Loop extends _statement_1.Statement {
    getMatcher() {
        const where = combi_1.seq(combi_1.str("WHERE"), combi_1.alt(new expressions_1.ComponentCond(), new expressions_1.Dynamic()));
        const components = combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), combi_1.plus(new expressions_1.ComponentCompare()), combi_1.tok(tokens_1.WParenRightW));
        const group = combi_1.ver(version_1.Version.v740sp08, combi_1.seq(combi_1.str("GROUP BY"), combi_1.alt(new expressions_1.Source(), components)));
        const into = combi_1.seq(combi_1.opt(combi_1.str("REFERENCE")), combi_1.str("INTO"), new expressions_1.Target());
        const assigning = combi_1.seq(combi_1.str("ASSIGNING"), new expressions_1.FSTarget());
        const target = combi_1.alt(combi_1.seq(combi_1.alt(into, assigning), combi_1.opt(group), combi_1.opt(combi_1.str("CASTING"))), combi_1.str("TRANSPORTING NO FIELDS"));
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const to = combi_1.seq(combi_1.str("TO"), new expressions_1.Source());
        const usingKey = combi_1.seq(combi_1.str("USING KEY"), combi_1.alt(new expressions_1.SimpleName(), new expressions_1.Dynamic()));
        const options = combi_1.per(target, from, to, where, usingKey);
        const at = combi_1.seq(combi_1.str("AT"), combi_1.opt(combi_1.str("GROUP")), new expressions_1.Source(), combi_1.opt(options));
        return combi_1.seq(combi_1.str("LOOP"), combi_1.opt(at));
    }
}
exports.Loop = Loop;
