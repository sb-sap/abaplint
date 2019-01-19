"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GetPFStatus extends _statement_1.Statement {
    getMatcher() {
        const program = combi_1.seq(combi_1.str("PROGRAM"), new expressions_1.Source());
        const excl = combi_1.seq(combi_1.str("EXCLUDING"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("GET PF-STATUS"), new expressions_1.Target(), combi_1.opt(program), combi_1.opt(excl));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GetPFStatus = GetPFStatus;
