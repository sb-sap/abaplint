"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class DeleteDatabase extends _statement_1.Statement {
    getMatcher() {
        const where = combi_1.seq(combi_1.str("WHERE"), combi_1.alt(new expressions_1.SQLCond(), new expressions_1.Dynamic()));
        const source = combi_1.alt(new expressions_1.Dynamic(), new expressions_1.DatabaseTable());
        // todo, client specified and connection not possible in Cloud
        const client = combi_1.str("CLIENT SPECIFIED");
        const connection = combi_1.seq(combi_1.str("CONNECTION"), new expressions_1.Dynamic());
        const from = combi_1.seq(combi_1.str("FROM"), source, combi_1.opt(client), combi_1.opt(connection), combi_1.opt(where));
        const table = combi_1.seq(source, combi_1.opt(client), combi_1.opt(connection), combi_1.str("FROM"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.SQLSource());
        const ret = combi_1.seq(combi_1.str("DELETE"), combi_1.alt(from, table));
        return ret;
    }
}
exports.DeleteDatabase = DeleteDatabase;
