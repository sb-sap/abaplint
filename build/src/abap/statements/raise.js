"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class Raise extends _statement_1.Statement {
    getMatcher() {
        const wit = combi_1.seq(combi_1.str("WITH"), new expressions_1.Source(), combi_1.opt(new expressions_1.Source()), combi_1.opt(new expressions_1.Source()), combi_1.opt(new expressions_1.Source()));
        const mess = combi_1.seq(combi_1.str("MESSAGE"), new expressions_1.MessageSource(), combi_1.opt(wit));
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new expressions_1.ParameterListS());
        const from = combi_1.alt(new expressions_1.Source(), combi_1.seq(combi_1.str("TYPE"), new expressions_1.ClassName()));
        const clas = combi_1.seq(combi_1.opt(combi_1.str("RESUMABLE")), combi_1.str("EXCEPTION"), from, combi_1.opt(combi_1.alt(combi_1.ver(version_1.Version.v750, mess), combi_1.ver(version_1.Version.v752, combi_1.str("USING MESSAGE")))), combi_1.opt(exporting));
        const ret = combi_1.seq(combi_1.str("RAISE"), combi_1.alt(new expressions_1.Field(), clas));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Raise = Raise;
