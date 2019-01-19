"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class SetLeft extends _statement_1.Statement {
    getMatcher() {
        const column = combi_1.seq(combi_1.str("COLUMN"), new expressions_1.Source());
        return combi_1.verNot(version_1.Version.Cloud, combi_1.seq(combi_1.str("SET LEFT SCROLL-BOUNDARY"), combi_1.opt(column)));
    }
}
exports.SetLeft = SetLeft;
