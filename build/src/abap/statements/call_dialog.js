"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallDialog extends _statement_1.Statement {
    getMatcher() {
        const from = combi_1.seq(new expressions_1.FieldSub(), combi_1.optPrio(combi_1.seq(combi_1.str("FROM"), new expressions_1.Source())));
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), combi_1.plus(from));
        const to = combi_1.seq(new expressions_1.Field(), combi_1.optPrio(combi_1.seq(combi_1.str("TO"), new expressions_1.Field())));
        const importing = combi_1.seq(combi_1.str("IMPORTING"), combi_1.plus(to));
        const ret = combi_1.seq(combi_1.str("CALL DIALOG"), new expressions_1.Constant(), combi_1.opt(exporting), combi_1.opt(importing));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallDialog = CallDialog;
