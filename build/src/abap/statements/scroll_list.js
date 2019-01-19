"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class ScrollList extends _statement_1.Statement {
    getMatcher() {
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Source());
        const column = combi_1.seq(combi_1.str("TO COLUMN"), new expressions_1.Source());
        const to = combi_1.seq(combi_1.str("TO"), combi_1.alt(combi_1.str("FIRST PAGE"), combi_1.str("LAST PAGE"), combi_1.seq(combi_1.str("PAGE"), new expressions_1.Source())));
        const ret = combi_1.seq(combi_1.str("SCROLL LIST"), combi_1.per(index, combi_1.alt(to, combi_1.str("BACKWARD"), combi_1.str("FORWARD")), column, line));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.ScrollList = ScrollList;
