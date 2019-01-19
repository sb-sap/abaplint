"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class EnhancementSection extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("ENHANCEMENT-SECTION"), new expressions_1.Field(), combi_1.str("SPOTS"), new expressions_1.Field(), combi_1.opt(combi_1.str("STATIC")));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.EnhancementSection = EnhancementSection;
