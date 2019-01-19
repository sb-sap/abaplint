"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SetTitlebar extends _statement_1.Statement {
    getMatcher() {
        const wit = combi_1.seq(combi_1.str("WITH"), combi_1.plus(new expressions_1.Source()));
        const program = combi_1.seq(combi_1.str("OF PROGRAM"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("SET TITLEBAR"), new expressions_1.Source(), combi_1.opt(program), combi_1.opt(wit));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SetTitlebar = SetTitlebar;
