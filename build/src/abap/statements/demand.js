"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Demand extends _statement_1.Statement {
    getMatcher() {
        const field = combi_1.seq(new expressions_1.Field(), combi_1.str("="), new expressions_1.Target());
        const messages = combi_1.seq(combi_1.str("MESSAGES INTO"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("DEMAND"), combi_1.plus(field), combi_1.str("FROM CONTEXT"), new expressions_1.Field(), combi_1.opt(messages));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Demand = Demand;
