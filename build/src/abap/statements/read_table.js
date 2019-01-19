"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ReadTable extends _statement_1.Statement {
    getMatcher() {
        const comparing = combi_1.seq(combi_1.str("COMPARING"), combi_1.plus(new expressions_1.FieldSub()));
        const target = combi_1.alt(combi_1.seq(combi_1.str("ASSIGNING"), new expressions_1.FSTarget()), combi_1.seq(combi_1.opt(combi_1.str("REFERENCE")), combi_1.str("INTO"), new expressions_1.Target()), combi_1.str("TRANSPORTING NO FIELDS"));
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const compare = combi_1.seq(combi_1.alt(new expressions_1.FieldChain(), new expressions_1.Dynamic()), combi_1.str("="), new expressions_1.Source());
        const components = combi_1.seq(combi_1.alt(new expressions_1.Field(), new expressions_1.Dynamic()), combi_1.str("COMPONENTS"), combi_1.plus(compare));
        const key = combi_1.seq(combi_1.alt(combi_1.str("WITH KEY"), combi_1.str("WITH TABLE KEY")), combi_1.alt(combi_1.plus(compare), components, combi_1.seq(combi_1.optPrio(combi_1.str("=")), new expressions_1.Source())));
        const using = combi_1.seq(combi_1.str("USING KEY"), combi_1.alt(new expressions_1.Field(), new expressions_1.Dynamic()));
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const perm = combi_1.per(combi_1.alt(index, key, from), target, using, comparing, combi_1.str("CASTING"), combi_1.seq(combi_1.str("TRANSPORTING"), combi_1.plus(new expressions_1.Field())), combi_1.str("BINARY SEARCH"));
        return combi_1.seq(combi_1.str("READ TABLE"), new expressions_1.Source(), combi_1.opt(perm));
    }
}
exports.ReadTable = ReadTable;
