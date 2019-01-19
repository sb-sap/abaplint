"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallKernel extends _statement_1.Statement {
    getMatcher() {
        const field = combi_1.seq(combi_1.str("ID"), new expressions_1.Source(), combi_1.str("FIELD"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("CALL"), combi_1.alt(new expressions_1.Constant(), new expressions_1.Field()), combi_1.star(field));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallKernel = CallKernel;
