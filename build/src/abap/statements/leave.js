"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Leave extends _statement_1.Statement {
    getMatcher() {
        const retu = combi_1.seq(combi_1.str("AND RETURN TO SCREEN"), new expressions_1.Source());
        const transaction = combi_1.seq(combi_1.str("TO TRANSACTION"), new expressions_1.Source(), combi_1.opt(combi_1.str("AND SKIP FIRST SCREEN")));
        const ret = combi_1.seq(combi_1.str("LEAVE"), combi_1.opt(combi_1.alt(combi_1.str("TO CURRENT TRANSACTION"), combi_1.seq(combi_1.opt(combi_1.str("TO")), combi_1.str("LIST-PROCESSING"), combi_1.opt(retu)), combi_1.str("LIST-PROCESSING"), combi_1.str("SCREEN"), transaction, combi_1.str("PROGRAM"), combi_1.seq(combi_1.str("TO SCREEN"), new expressions_1.Source()))));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Leave = Leave;
