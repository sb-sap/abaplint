"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GenerateDynpro extends _statement_1.Statement {
    getMatcher() {
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Target());
        const word = combi_1.seq(combi_1.str("WORD"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("GENERATE DYNPRO"), new expressions_1.Source(), new expressions_1.Source(), new expressions_1.Source(), new expressions_1.Source(), combi_1.str("ID"), new expressions_1.Source(), combi_1.str("MESSAGE"), new expressions_1.Target(), combi_1.per(line, word));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GenerateDynpro = GenerateDynpro;
