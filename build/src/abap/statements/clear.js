"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Clear extends _statement_1.Statement {
    getMatcher() {
        const wit = combi_1.seq(combi_1.str("WITH"), new expressions_1.Source());
        const mode = combi_1.alt(combi_1.str("IN CHARACTER MODE"), combi_1.str("IN BYTE MODE"));
        return combi_1.seq(combi_1.str("CLEAR"), new expressions_1.Target(), combi_1.opt(wit), combi_1.opt(mode));
    }
}
exports.Clear = Clear;
