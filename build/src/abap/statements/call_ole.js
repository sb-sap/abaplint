"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallOLE extends _statement_1.Statement {
    getMatcher() {
        const fields = combi_1.seq(combi_1.regex(/^#?\w+$/), combi_1.str("="), new expressions_1.Source());
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), combi_1.plus(fields));
        const rc = combi_1.seq(combi_1.str("="), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("CALL METHOD OF"), new expressions_1.Source(), new expressions_1.Constant(), combi_1.opt(rc), combi_1.opt(combi_1.str("NO FLUSH")), combi_1.opt(combi_1.str("QUEUEONLY")), combi_1.opt(exporting));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallOLE = CallOLE;
