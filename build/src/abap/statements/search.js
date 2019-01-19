"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Search extends _statement_1.Statement {
    getMatcher() {
        const starting = combi_1.seq(combi_1.str("STARTING AT"), new expressions_1.Source());
        const ending = combi_1.seq(combi_1.str("ENDING AT"), new expressions_1.Source());
        const mark = combi_1.str("AND MARK");
        const mode = combi_1.alt(combi_1.str("IN BYTE MODE"), combi_1.str("IN CHARACTER MODE"));
        const ret = combi_1.seq(combi_1.str("SEARCH"), new expressions_1.Source(), combi_1.str("FOR"), new expressions_1.Source(), combi_1.opt(combi_1.per(mode, starting, ending, mark)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Search = Search;
