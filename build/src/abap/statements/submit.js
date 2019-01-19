"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Submit extends _statement_1.Statement {
    getMatcher() {
        const sign = combi_1.seq(combi_1.str("SIGN"), new expressions_1.Source());
        const eq = combi_1.alt(combi_1.str("="), combi_1.str("EQ"), combi_1.str("IN"), combi_1.str("NE"), combi_1.str("CP"), combi_1.str("GE"), combi_1.str("LE"), combi_1.str("INCL"));
        const compare = combi_1.seq(eq, new expressions_1.Source());
        const between = combi_1.seq(combi_1.str("BETWEEN"), new expressions_1.Source(), combi_1.str("AND"), new expressions_1.Source());
        const selectionTable = combi_1.seq(combi_1.str("SELECTION-TABLE"), new expressions_1.Source());
        const awith = combi_1.seq(combi_1.str("WITH"), combi_1.alt(combi_1.seq(new expressions_1.Field(), combi_1.alt(compare, between)), selectionTable));
        const prog = combi_1.alt(new expressions_1.NamespaceSimpleName(), new expressions_1.Dynamic());
        const job = combi_1.seq(combi_1.str("VIA JOB"), new expressions_1.Source(), combi_1.str("NUMBER"), new expressions_1.Source());
        const exporting = combi_1.str("EXPORTING LIST TO MEMORY");
        const spool = combi_1.seq(combi_1.str("SPOOL PARAMETERS"), new expressions_1.Source());
        const archive = combi_1.seq(combi_1.str("ARCHIVE PARAMETERS"), new expressions_1.Source());
        const lineSize = combi_1.seq(combi_1.str("LINE-SIZE"), new expressions_1.Source());
        const lineCount = combi_1.seq(combi_1.str("LINE-COUNT"), new expressions_1.Source());
        const user = combi_1.seq(combi_1.str("USER"), new expressions_1.Source());
        const sset = combi_1.seq(combi_1.str("USING SELECTION-SET"), new expressions_1.Source());
        const ssetp = combi_1.seq(combi_1.str("USING SELECTION-SETS OF PROGRAM"), new expressions_1.Source());
        const uss = combi_1.seq(combi_1.str("USING SELECTION-SCREEN"), new expressions_1.Source());
        const free = combi_1.seq(combi_1.str("WITH FREE SELECTIONS"), new expressions_1.Source());
        const newList = combi_1.seq(combi_1.str("NEW LIST IDENTIFICATION"), new expressions_1.Source());
        const layout = combi_1.seq(combi_1.str("LAYOUT"), new expressions_1.Source());
        const cover = combi_1.seq(combi_1.str("SAP COVER PAGE"), new expressions_1.Source());
        const keep = combi_1.seq(combi_1.str("KEEP IN SPOOL"), new expressions_1.Source());
        const imm = combi_1.seq(combi_1.str("IMMEDIATELY"), new expressions_1.Source());
        const dest = combi_1.seq(combi_1.str("DESTINATION"), new expressions_1.Source());
        const perm = combi_1.per(combi_1.plus(awith), spool, lineSize, lineCount, archive, user, sset, ssetp, keep, cover, imm, layout, dest, free, newList, sign, uss, combi_1.str("TO SAP-SPOOL"), combi_1.str("WITHOUT SPOOL DYNPRO"), combi_1.str("VIA SELECTION-SCREEN"), exporting, combi_1.str("AND RETURN"), job);
        const ret = combi_1.seq(combi_1.str("SUBMIT"), prog, combi_1.opt(perm));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Submit = Submit;
