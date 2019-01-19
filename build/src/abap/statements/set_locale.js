"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SetLocale extends _statement_1.Statement {
    getMatcher() {
        const country = combi_1.seq(combi_1.str("COUNTRY"), new expressions_1.Source());
        const modifier = combi_1.seq(combi_1.str("MODIFIER"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("SET LOCALE LANGUAGE"), new expressions_1.Source(), combi_1.opt(country), combi_1.opt(modifier));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SetLocale = SetLocale;
