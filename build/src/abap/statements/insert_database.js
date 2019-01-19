"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class InsertDatabase extends _statement_1.Statement {
    getMatcher() {
        const target = combi_1.alt(new expressions_1.DatabaseTable(), new expressions_1.Dynamic());
        const client = combi_1.str("CLIENT SPECIFIED");
        const conn = combi_1.seq(combi_1.str("CONNECTION"), combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic()));
        const f = combi_1.seq(combi_1.opt(client), combi_1.opt(conn), combi_1.str("FROM"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.SQLSource(), combi_1.opt(combi_1.str("ACCEPTING DUPLICATE KEYS")));
        const from = combi_1.seq(target, combi_1.opt(combi_1.alt(f, client)));
        const into = combi_1.seq(combi_1.str("INTO"), target, combi_1.opt(combi_1.str("CLIENT SPECIFIED")), combi_1.opt(conn), combi_1.str("VALUES"), new expressions_1.Source());
        return combi_1.seq(combi_1.str("INSERT"), combi_1.alt(from, into));
    }
}
exports.InsertDatabase = InsertDatabase;
