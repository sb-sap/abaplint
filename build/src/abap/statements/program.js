"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Program extends _statement_1.Statement {
    getMatcher() {
        const message = combi_1.seq(combi_1.str("MESSAGE-ID"), new expressions_1.Source());
        const size = combi_1.seq(combi_1.str("LINE-SIZE"), new expressions_1.Source());
        const heading = combi_1.str("NO STANDARD PAGE HEADING");
        const line = combi_1.seq(combi_1.str("LINE-COUNT"), new expressions_1.Source());
        const options = combi_1.per(message, size, heading, line);
        const ret = combi_1.seq(combi_1.str("PROGRAM"), combi_1.optPrio(new expressions_1.Field()), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Program = Program;
