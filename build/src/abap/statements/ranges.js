"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Ranges extends _statement_1.Statement {
    getMatcher() {
        const occurs = combi_1.seq(combi_1.str("OCCURS"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("RANGES"), new expressions_1.SimpleName(), combi_1.str("FOR"), new expressions_1.FieldSub(), combi_1.opt(occurs));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Ranges = Ranges;
