"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
// method call
class Call extends _statement_1.Statement {
    getMatcher() {
        const call = combi_1.seq(combi_1.str("CALL"), combi_1.str("METHOD"), new expressions_1.MethodSource(), new expressions_1.MethodCallBody());
        return combi_1.alt(call, new expressions_1.MethodCallChain());
    }
}
exports.Call = Call;
