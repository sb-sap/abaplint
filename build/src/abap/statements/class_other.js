"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ClassOther extends _statement_1.Statement {
    getMatcher() {
        const def = combi_1.seq(combi_1.str("DEFERRED"), combi_1.opt(combi_1.str("PUBLIC")));
        const local = combi_1.seq(combi_1.str("LOCAL FRIENDS"), combi_1.plus(new expressions_1.ClassName()));
        return combi_1.seq(combi_1.str("CLASS"), new expressions_1.ClassName(), combi_1.str("DEFINITION"), combi_1.alt(def, local));
    }
}
exports.ClassOther = ClassOther;
