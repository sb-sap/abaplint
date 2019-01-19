"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Interface extends _statement_1.Statement {
    getMatcher() {
        return combi_1.seq(combi_1.str("INTERFACE"), new expressions_1.ClassName(), combi_1.opt(combi_1.str("PUBLIC")));
    }
}
exports.Interface = Interface;
