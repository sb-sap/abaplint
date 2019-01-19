"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class StaticEnd extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.alt(combi_1.str("STATIC"), combi_1.str("STATICS")), combi_1.str("END OF"), new expressions_1.NamespaceSimpleName());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.StaticEnd = StaticEnd;
