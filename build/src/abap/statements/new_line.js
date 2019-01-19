"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class NewLine extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("NEW-LINE"), combi_1.opt(combi_1.alt(combi_1.str("SCROLLING"), combi_1.str("NO-SCROLLING"))));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.NewLine = NewLine;
