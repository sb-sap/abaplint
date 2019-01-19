"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ModifyDatabase extends _statement_1.Statement {
    getMatcher() {
        const from = combi_1.seq(combi_1.str("FROM"), combi_1.opt(combi_1.str("TABLE")), new expressions_1.Source());
        const client = combi_1.str("CLIENT SPECIFIED");
        const target = combi_1.alt(new expressions_1.DatabaseTable(), new expressions_1.Dynamic());
        const conn = combi_1.seq(combi_1.str("CONNECTION"), combi_1.alt(new expressions_1.Dynamic(), new expressions_1.Source()));
        const options = combi_1.per(conn, from, client);
        return combi_1.seq(combi_1.str("MODIFY"), target, options);
    }
}
exports.ModifyDatabase = ModifyDatabase;
