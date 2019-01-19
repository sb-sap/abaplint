"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GetBadi extends _statement_1.Statement {
    getMatcher() {
        const filters = combi_1.seq(combi_1.str("FILTERS"), new expressions_1.ParameterListS());
        const context = combi_1.seq(combi_1.str("CONTEXT"), new expressions_1.Source());
        const type = combi_1.seq(combi_1.str("TYPE"), new expressions_1.Dynamic());
        const ret = combi_1.seq(combi_1.str("GET BADI"), new expressions_1.Target(), combi_1.opt(type), combi_1.opt(filters), combi_1.opt(context));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GetBadi = GetBadi;
