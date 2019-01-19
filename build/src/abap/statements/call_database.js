"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallDatabase extends _statement_1.Statement {
    getMatcher() {
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new expressions_1.ParameterListS());
        const importing = combi_1.seq(combi_1.str("IMPORTING"), new expressions_1.ParameterListT());
        const expl = combi_1.seq(combi_1.opt(exporting), combi_1.opt(importing));
        const tab = combi_1.seq(combi_1.str("PARAMETER-TABLE"), new expressions_1.Source());
        const connection = combi_1.seq(combi_1.str("CONNECTION"), new expressions_1.Dynamic());
        const ret = combi_1.seq(combi_1.str("CALL DATABASE PROCEDURE"), new expressions_1.Dynamic(), combi_1.opt(connection), combi_1.alt(expl, tab));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallDatabase = CallDatabase;
