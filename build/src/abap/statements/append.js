"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Append extends _statement_1.Statement {
    getMatcher() {
        const assigning = combi_1.seq(combi_1.str("ASSIGNING"), new expressions_1.FSTarget());
        const reference = combi_1.seq(combi_1.str("REFERENCE INTO"), new expressions_1.Target());
        const sorted = combi_1.seq(combi_1.str("SORTED BY"), new expressions_1.Field());
        const range = combi_1.seq(combi_1.opt(combi_1.seq(combi_1.str("FROM"), new expressions_1.Source())), combi_1.opt(combi_1.seq(combi_1.str("TO"), new expressions_1.Source())));
        return combi_1.seq(combi_1.str("APPEND"), combi_1.alt(combi_1.str("INITIAL LINE"), combi_1.seq(combi_1.opt(combi_1.str("LINES OF")), new expressions_1.Source())), combi_1.opt(range), combi_1.opt(combi_1.seq(combi_1.str("TO"), new expressions_1.Target())), combi_1.opt(combi_1.alt(assigning, reference)), combi_1.opt(combi_1.str("CASTING")), combi_1.opt(sorted));
    }
}
exports.Append = Append;
