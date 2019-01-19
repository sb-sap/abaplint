"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Select extends _statement_1.Statement {
    getMatcher() {
        return combi_1.seq(new expressions_1.Select(), combi_1.opt(new expressions_1.SQLHints()));
    }
}
exports.Select = Select;
