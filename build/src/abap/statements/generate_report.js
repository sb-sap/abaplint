"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GenerateReport extends _statement_1.Statement {
    getMatcher() {
        const without = combi_1.str("WITHOUT SELECTION-SCREEN");
        const message = combi_1.seq(combi_1.str("MESSAGE"), new expressions_1.Target());
        const include = combi_1.seq(combi_1.str("INCLUDE"), new expressions_1.Target());
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Target());
        const word = combi_1.seq(combi_1.str("WORD"), new expressions_1.Target());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Target());
        const headers = combi_1.str("WITH PRECOMPILED HEADERS");
        const test = combi_1.str("WITH TEST CODE");
        const options = combi_1.per(without, message, include, line, word, offset, headers, test);
        const ret = combi_1.seq(combi_1.str("GENERATE REPORT"), new expressions_1.Source(), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GenerateReport = GenerateReport;
