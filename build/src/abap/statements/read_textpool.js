"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class ReadTextpool extends _statement_1.Statement {
    getMatcher() {
        const language = combi_1.seq(combi_1.str("LANGUAGE"), new expressions_1.Source());
        const into = combi_1.seq(combi_1.str("INTO"), new expressions_1.Target());
        const state = combi_1.seq(combi_1.str("STATE"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("READ TEXTPOOL"), new expressions_1.Source(), combi_1.per(into, language, state));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.ReadTextpool = ReadTextpool;
