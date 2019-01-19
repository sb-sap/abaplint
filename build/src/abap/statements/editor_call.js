"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class EditorCall extends _statement_1.Statement {
    getMatcher() {
        const title = combi_1.seq(combi_1.str("TITLE"), new expressions_1.Source());
        const options = combi_1.per(combi_1.str("DISPLAY-MODE"), title);
        const ret = combi_1.seq(combi_1.str("EDITOR-CALL FOR"), combi_1.opt(combi_1.str("REPORT")), new expressions_1.Source(), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.EditorCall = EditorCall;
