"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GetProperty extends _statement_1.Statement {
    getMatcher() {
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new expressions_1.ParameterListS());
        const ret = combi_1.seq(combi_1.str("GET PROPERTY OF"), new expressions_1.FieldSub(), new expressions_1.Source(), combi_1.str("="), new expressions_1.Source(), combi_1.opt(combi_1.str("NO FLUSH")), combi_1.opt(exporting));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GetProperty = GetProperty;
