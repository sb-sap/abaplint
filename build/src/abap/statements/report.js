"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
const tokens_1 = require("../tokens");
class Report extends _statement_1.Statement {
    getMatcher() {
        const more = combi_1.seq(combi_1.tok(tokens_1.ParenLeft), new expressions_1.Integer(), combi_1.tok(tokens_1.ParenRightW));
        const heading = combi_1.str("NO STANDARD PAGE HEADING");
        const size = combi_1.seq(combi_1.str("LINE-SIZE"), new expressions_1.Integer());
        const count = combi_1.seq(combi_1.str("LINE-COUNT"), new expressions_1.Integer(), combi_1.opt(more));
        const message = combi_1.seq(combi_1.str("MESSAGE-ID"), new expressions_1.MessageClass());
        const database = combi_1.seq(combi_1.str("USING DATABASE"), new expressions_1.Field());
        const ret = combi_1.seq(combi_1.str("REPORT"), combi_1.opt(new expressions_1.NamespaceSimpleName()), combi_1.opt(combi_1.per(heading, size, count, database, message)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Report = Report;
