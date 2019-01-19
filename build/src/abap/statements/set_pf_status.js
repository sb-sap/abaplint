"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SetPFStatus extends _statement_1.Statement {
    getMatcher() {
        const program = combi_1.seq(combi_1.str("OF PROGRAM"), new expressions_1.Source());
        const options = combi_1.per(program, combi_1.str("IMMEDIATELY"), combi_1.seq(combi_1.str("EXCLUDING"), new expressions_1.Source()));
        const ret = combi_1.seq(combi_1.str("SET PF-STATUS"), new expressions_1.Source(), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SetPFStatus = SetPFStatus;
