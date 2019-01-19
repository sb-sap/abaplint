"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class Case extends _statement_1.Statement {
    getMatcher() {
        return combi_1.seq(combi_1.str("CASE"), combi_1.opt(combi_1.ver(version_1.Version.v750, combi_1.str("TYPE OF"))), new expressions_1.Source());
    }
}
exports.Case = Case;
