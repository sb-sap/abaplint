"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class AssignLocalCopy extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("ASSIGN LOCAL COPY OF"), combi_1.opt(combi_1.seq(combi_1.str("INITIAL"), combi_1.opt(combi_1.str("LINE OF")))), combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic()), combi_1.str("TO"), new expressions_1.FieldSymbol());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.AssignLocalCopy = AssignLocalCopy;
