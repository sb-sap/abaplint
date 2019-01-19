"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Method extends _statement_1.Statement {
    getMatcher() {
        const name = combi_1.regex(/[\w~]+/);
        const kernel = combi_1.seq(combi_1.str("BY KERNEL MODULE"), name, combi_1.opt(combi_1.alt(combi_1.str("FAIL"), combi_1.str("IGNORE"))));
        return combi_1.seq(combi_1.str("METHOD"), new expressions_1.MethodName(), combi_1.opt(kernel));
    }
}
exports.Method = Method;
