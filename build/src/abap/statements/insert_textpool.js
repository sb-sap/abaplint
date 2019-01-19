"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class InsertTextpool extends _statement_1.Statement {
    getMatcher() {
        const state = combi_1.seq(combi_1.str("STATE"), new expressions_1.Source());
        const language = combi_1.seq(combi_1.str("LANGUAGE"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("INSERT TEXTPOOL"), new expressions_1.Source(), combi_1.str("FROM"), new expressions_1.Source(), combi_1.opt(language), combi_1.opt(state));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.InsertTextpool = InsertTextpool;
