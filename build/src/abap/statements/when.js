"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class When extends _statement_1.Statement {
    getMatcher() {
        const sourc = combi_1.seq(new expressions_1.Source(), combi_1.star(combi_1.seq(combi_1.str("OR"), new expressions_1.Source())));
        return combi_1.seq(combi_1.str("WHEN"), combi_1.altPrio(combi_1.str("OTHERS"), sourc));
    }
}
exports.When = When;
