"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class PrintControl extends _statement_1.Statement {
    getMatcher() {
        const index = combi_1.seq(combi_1.str("INDEX-LINE"), new expressions_1.Source());
        const func = combi_1.seq(combi_1.str("FUNCTION"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("PRINT-CONTROL"), combi_1.alt(index, func));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.PrintControl = PrintControl;
