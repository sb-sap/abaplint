"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const version_1 = require("../../version");
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
const expressions_2 = require("../expressions");
class MethodDef extends _statement_1.Statement {
    getMatcher() {
        const field = combi_1.regex(/^!?(\/\w+\/)?\w+$/);
        const resumable = combi_1.seq(combi_1.str("RESUMABLE"), combi_1.tok(tokens_1.ParenLeft), new expressions_1.ClassName(), combi_1.tok(tokens_1.ParenRightW));
        const raising = combi_1.seq(combi_1.str("RAISING"), combi_1.plus(combi_1.alt(resumable, new expressions_1.ClassName())));
        const exceptions = combi_1.seq(combi_1.str("EXCEPTIONS"), combi_1.plus(combi_1.regex(/^\w+?$/)));
        const def = combi_1.ver(version_1.Version.v740sp08, combi_1.seq(combi_1.str("DEFAULT"), combi_1.alt(combi_1.str("FAIL"), combi_1.str("IGNORE"))));
        const parameters = combi_1.seq(combi_1.opt(combi_1.alt(combi_1.str("ABSTRACT"), combi_1.str("FINAL"), combi_1.str("FOR TESTING"), def)), combi_1.opt(new expressions_1.MethodDefImporting()), combi_1.opt(new expressions_1.MethodDefExporting()), combi_1.opt(new expressions_2.MethodDefChanging()), combi_1.opt(new expressions_2.MethodDefReturning()), combi_1.opt(combi_1.alt(raising, exceptions)));
        const event = combi_1.seq(combi_1.str("FOR EVENT"), new expressions_1.Field(), combi_1.str("OF"), new expressions_1.Field(), combi_1.opt(combi_1.seq(combi_1.str("IMPORTING"), combi_1.plus(field))));
        const ret = combi_1.seq(combi_1.alt(combi_1.str("CLASS-METHODS"), combi_1.str("METHODS")), new expressions_1.MethodName(), combi_1.alt(event, parameters, combi_1.str("NOT AT END OF MODE"), combi_1.opt(new expressions_2.Redefinition())));
        return ret;
    }
}
exports.MethodDef = MethodDef;
