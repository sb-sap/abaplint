"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class GetTime extends _statement_1.Statement {
    getMatcher() {
        const options = combi_1.seq(combi_1.alt(combi_1.str("STAMP FIELD"), combi_1.str("FIELD")), new expressions_1.Target());
        return combi_1.seq(combi_1.str("GET TIME"), combi_1.opt(options));
    }
}
exports.GetTime = GetTime;
