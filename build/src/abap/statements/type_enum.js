"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class TypeEnum extends _statement_1.Statement {
    getMatcher() {
        // it is also possible to define without Value, this is covered by normal type
        const ret = combi_1.seq(combi_1.str("TYPES"), new expressions_1.NamespaceSimpleName(), new expressions_1.Value());
        return ret;
    }
}
exports.TypeEnum = TypeEnum;
