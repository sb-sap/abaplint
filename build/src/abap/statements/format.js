"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Format extends _statement_1.Statement {
    getMatcher() {
        const eq = combi_1.seq(combi_1.str("="), new expressions_1.Source());
        const value = combi_1.alt(eq, new expressions_1.Source());
        const toggle = combi_1.alt(combi_1.str("ON"), combi_1.str("OFF"));
        const options = combi_1.per(combi_1.str("RESET"), combi_1.seq(combi_1.str("INTENSIFIED"), combi_1.opt(value)), combi_1.seq(combi_1.str("INVERSE"), combi_1.opt(value)), combi_1.seq(combi_1.str("HOTSPOT"), combi_1.opt(value)), combi_1.seq(combi_1.str("FRAMES"), value), combi_1.seq(combi_1.str("INPUT"), value), combi_1.seq(combi_1.str("COLOR"), value, combi_1.opt(toggle)));
        const ret = combi_1.seq(combi_1.str("FORMAT"), options);
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Format = Format;
