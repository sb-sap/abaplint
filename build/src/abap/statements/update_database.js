"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class UpdateDatabase extends _statement_1.Statement {
    getMatcher() {
        const target = combi_1.alt(new expressions_1.DatabaseTable(), new expressions_1.Dynamic());
        const param = combi_1.seq(new expressions_1.Field(), combi_1.str("="), new expressions_1.SQLSource());
        const parameters = combi_1.seq(param, combi_1.star(combi_1.seq(combi_1.opt(combi_1.str(",")), param)));
        const set = combi_1.seq(combi_1.str("SET"), combi_1.alt(parameters, new expressions_1.Dynamic()), combi_1.opt(combi_1.seq(combi_1.str("WHERE"), new expressions_1.SQLCond())));
        const fromTable = combi_1.seq(combi_1.str("FROM"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.SQLSource());
        const client = combi_1.str("CLIENT SPECIFIED");
        const connection = combi_1.seq(combi_1.str("CONNECTION"), new expressions_1.Dynamic());
        const ret = combi_1.seq(combi_1.str("UPDATE"), target, combi_1.opt(client), combi_1.opt(connection), combi_1.opt(combi_1.alt(fromTable, set)));
        return ret;
    }
}
exports.UpdateDatabase = UpdateDatabase;
