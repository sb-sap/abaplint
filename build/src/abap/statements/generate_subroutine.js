"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GenerateSubroutine extends _statement_1.Statement {
    getMatcher() {
        const name = combi_1.seq(combi_1.str("NAME"), new expressions_1.Source());
        const message = combi_1.seq(combi_1.str("MESSAGE"), new expressions_1.Target());
        const messageid = combi_1.seq(combi_1.str("MESSAGE-ID"), new expressions_1.Target());
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Target());
        const word = combi_1.seq(combi_1.str("WORD"), new expressions_1.Target());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Target());
        const short = combi_1.seq(combi_1.str("SHORTDUMP-ID"), new expressions_1.Target());
        const include = combi_1.seq(combi_1.str("INCLUDE"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("GENERATE SUBROUTINE POOL"), new expressions_1.Source(), combi_1.per(name, message, line, word, include, offset, messageid, short));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GenerateSubroutine = GenerateSubroutine;
