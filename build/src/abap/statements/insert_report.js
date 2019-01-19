"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class InsertReport extends _statement_1.Statement {
    getMatcher() {
        const options = combi_1.per(combi_1.seq(combi_1.str("STATE"), new expressions_1.Source()), combi_1.seq(combi_1.str("EXTENSION TYPE"), new expressions_1.Source()), combi_1.seq(combi_1.str("DIRECTORY ENTRY"), new expressions_1.Source()), combi_1.seq(combi_1.str("UNICODE ENABLING"), new expressions_1.Source()), combi_1.seq(combi_1.str("PROGRAM TYPE"), new expressions_1.Source()), combi_1.str("KEEPING DIRECTORY ENTRY"));
        const ret = combi_1.seq(combi_1.str("INSERT REPORT"), new expressions_1.Source(), combi_1.str("FROM"), new expressions_1.Source(), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.InsertReport = InsertReport;
