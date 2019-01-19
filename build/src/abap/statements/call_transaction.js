"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallTransaction extends _statement_1.Statement {
    getMatcher() {
        const options = combi_1.seq(combi_1.str("OPTIONS FROM"), new expressions_1.Source());
        const messages = combi_1.seq(combi_1.str("MESSAGES INTO"), new expressions_1.Target());
        const auth = combi_1.seq(combi_1.alt(combi_1.str("WITH"), combi_1.str("WITHOUT")), combi_1.str("AUTHORITY-CHECK"));
        const perm = combi_1.per(combi_1.seq(combi_1.str("UPDATE"), new expressions_1.Source()), combi_1.str("AND SKIP FIRST SCREEN"), options, messages, combi_1.seq(combi_1.str("MODE"), new expressions_1.Source()));
        const ret = combi_1.seq(combi_1.str("CALL TRANSACTION"), new expressions_1.Source(), combi_1.opt(auth), combi_1.opt(combi_1.seq(combi_1.str("USING"), new expressions_1.Source())), combi_1.opt(perm));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallTransaction = CallTransaction;
