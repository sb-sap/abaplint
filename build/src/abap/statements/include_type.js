"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class IncludeType extends _statement_1.Statement {
    getMatcher() {
        const tas = combi_1.seq(combi_1.str("AS"), new expressions_1.Field());
        const renaming = combi_1.seq(combi_1.str("RENAMING WITH SUFFIX"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("INCLUDE"), combi_1.alt(combi_1.str("TYPE"), combi_1.str("STRUCTURE")), new expressions_1.TypeName(), combi_1.opt(tas), combi_1.opt(renaming));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.IncludeType = IncludeType;
