"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const version_1 = require("../../version");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class InterfaceDef extends _statement_1.Statement {
    getMatcher() {
        const val = combi_1.seq(new expressions_1.Field(), combi_1.str("="), new expressions_1.Source());
        const dataValues = combi_1.seq(combi_1.str("DATA VALUES"), combi_1.plus(val));
        const options = combi_1.alt(combi_1.seq(combi_1.str("ABSTRACT METHODS"), combi_1.plus(new expressions_1.Field())), combi_1.seq(combi_1.str("FINAL METHODS"), combi_1.plus(new expressions_1.Field())), combi_1.str("ALL METHODS ABSTRACT"), combi_1.str("ALL METHODS FINAL"), combi_1.ver(version_1.Version.v740sp02, combi_1.str("PARTIALLY IMPLEMENTED")));
        return combi_1.seq(combi_1.str("INTERFACES"), new expressions_1.Field(), combi_1.opt(options), combi_1.opt(dataValues));
    }
}
exports.InterfaceDef = InterfaceDef;
