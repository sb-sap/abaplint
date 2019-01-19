"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const version_1 = require("../../version");
const let_1 = require("./let");
class For extends combi_1.Expression {
    getRunnable() {
        const where = combi_1.seq(combi_1.str("WHERE"), new _1.Cond());
        const from = combi_1.seq(combi_1.str("FROM"), new _1.Source());
        const to = combi_1.seq(combi_1.str("TO"), new _1.Source());
        const inn = combi_1.seq(combi_1.str("IN"), new _1.Source(), combi_1.opt(from), combi_1.opt(to), combi_1.opt(where));
        const then = combi_1.seq(combi_1.str("THEN"), new _1.Source());
        const whil = combi_1.seq(combi_1.alt(combi_1.str("UNTIL"), combi_1.str("WHILE")), new _1.Cond());
        const itera = combi_1.seq(combi_1.str("="), new _1.Source(), combi_1.opt(then), whil);
        const f = combi_1.seq(combi_1.str("FOR"), new _1.InlineFor(), combi_1.alt(itera, inn));
        return combi_1.ver(version_1.Version.v740sp05, combi_1.plus(combi_1.seq(f, combi_1.opt(new let_1.Let()))));
    }
}
exports.For = For;
