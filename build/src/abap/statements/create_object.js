"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class CreateObject extends _statement_1.Statement {
    getMatcher() {
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new expressions_1.ParameterListS());
        const exceptions = combi_1.seq(combi_1.str("EXCEPTIONS"), new expressions_1.ParameterListExceptions());
        const table = combi_1.seq(combi_1.str("PARAMETER-TABLE"), new expressions_1.Source());
        const area = combi_1.seq(combi_1.str("AREA HANDLE"), new expressions_1.Source());
        const type = combi_1.seq(combi_1.str("TYPE"), combi_1.alt(new expressions_1.ClassName(), new expressions_1.Dynamic()));
        const ret = combi_1.seq(combi_1.str("CREATE OBJECT"), new expressions_1.Target(), combi_1.opt(combi_1.per(type, area)), combi_1.opt(combi_1.alt(exporting, table)), combi_1.opt(exceptions));
        return ret;
    }
}
exports.CreateObject = CreateObject;
