"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class NewPage extends _statement_1.Statement {
    getMatcher() {
        const line = combi_1.seq(combi_1.str("LINE-SIZE"), new expressions_1.Source());
        const print = combi_1.seq(combi_1.str("PRINT"), combi_1.alt(combi_1.str("OFF"), combi_1.str("ON")));
        const parameters = combi_1.seq(combi_1.str("PARAMETERS"), new expressions_1.Source());
        const destination = combi_1.seq(combi_1.str("DESTINATION"), new expressions_1.Source());
        const archive = combi_1.seq(combi_1.str("ARCHIVE PARAMETERS"), new expressions_1.Source());
        const lineCount = combi_1.seq(combi_1.str("LINE-COUNT"), new expressions_1.Source());
        const coverText = combi_1.seq(combi_1.str("COVER TEXT"), new expressions_1.Source());
        const coverPage = combi_1.seq(combi_1.str("SAP COVER PAGE"), new expressions_1.Source());
        const immediately = combi_1.seq(combi_1.str("IMMEDIATELY"), new expressions_1.Source());
        const keep = combi_1.seq(combi_1.str("KEEP IN SPOOL"), new expressions_1.Source());
        const layout = combi_1.seq(combi_1.str("LAYOUT"), new expressions_1.Source());
        const listAuth = combi_1.seq(combi_1.str("LIST AUTHORITY"), new expressions_1.Source());
        const dataset = combi_1.seq(combi_1.str("LIST DATASET"), new expressions_1.Source());
        const name = combi_1.seq(combi_1.str("LIST NAME"), new expressions_1.Source());
        const newList = combi_1.seq(combi_1.str("NEW LIST IDENTIFICATION"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("NEW-PAGE"), combi_1.opt(combi_1.per(print, combi_1.alt(combi_1.str("NO-TITLE"), combi_1.str("WITH-TITLE")), combi_1.alt(combi_1.str("NO-HEADING"), combi_1.str("WITH-HEADING")), combi_1.str("NO DIALOG"), parameters, listAuth, immediately, dataset, coverPage, newList, keep, name, layout, destination, coverText, archive, combi_1.str("NEW-SECTION"), lineCount, line)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.NewPage = NewPage;
