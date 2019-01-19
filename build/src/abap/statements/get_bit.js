"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class GetBit extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("GET BIT"), new expressions_1.Source(), combi_1.str("OF"), new expressions_1.Source(), combi_1.str("INTO"), new expressions_1.Target());
        return ret;
    }
}
exports.GetBit = GetBit;
