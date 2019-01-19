"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Rollback extends _statement_1.Statement {
    getMatcher() {
        const connection = combi_1.seq(combi_1.str("CONNECTION"), combi_1.alt(new expressions_1.Dynamic(), new expressions_1.Field()));
        return combi_1.seq(combi_1.str("ROLLBACK"), combi_1.alt(combi_1.str("WORK"), connection));
    }
}
exports.Rollback = Rollback;
