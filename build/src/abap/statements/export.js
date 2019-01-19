"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
// todo, cloud, split?
class Export extends _statement_1.Statement {
    getMatcher() {
        const id = combi_1.seq(combi_1.str("ID"), new expressions_1.Source());
        const db = combi_1.seq(combi_1.str("DATA BUFFER"), new expressions_1.Target());
        const memory = combi_1.seq(combi_1.str("MEMORY ID"), new expressions_1.Source());
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const using = combi_1.seq(combi_1.str("USING"), new expressions_1.Source());
        const client = combi_1.seq(combi_1.str("CLIENT"), new expressions_1.Source());
        const table = combi_1.seq(combi_1.str("INTERNAL TABLE"), new expressions_1.Target());
        const shared = combi_1.seq(combi_1.alt(combi_1.str("SHARED MEMORY"), combi_1.str("SHARED BUFFER")), new expressions_1.Field(), combi_1.str("("), new expressions_1.Field(), combi_1.str(")"), combi_1.str("ID"), new expressions_1.Source());
        const database = combi_1.seq(combi_1.str("DATABASE"), new expressions_1.Source(), combi_1.per(from, client, id, using));
        const target = combi_1.alt(db, memory, database, table, shared);
        const source = combi_1.alt(new expressions_1.ParameterListS(), combi_1.plus(new expressions_1.ParameterName()), new expressions_1.Dynamic());
        const compression = combi_1.seq(combi_1.str("COMPRESSION"), combi_1.alt(combi_1.str("ON"), combi_1.str("OFF")));
        const hint = combi_1.seq(combi_1.str("CODE PAGE HINT"), new expressions_1.Source());
        return combi_1.seq(combi_1.str("EXPORT"), source, combi_1.opt(from), combi_1.str("TO"), target, combi_1.opt(compression), combi_1.opt(hint));
    }
}
exports.Export = Export;
