"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Assert extends _statement_1.Statement {
    getMatcher() {
        const fields = combi_1.seq(combi_1.str("FIELDS"), combi_1.plus(new expressions_1.Source()));
        const subkey = combi_1.seq(combi_1.str("SUBKEY"), new expressions_1.Source());
        const id = combi_1.seq(combi_1.str("ID"), new expressions_1.NamespaceSimpleName());
        return combi_1.seq(combi_1.str("ASSERT"), combi_1.opt(id), combi_1.opt(subkey), combi_1.opt(fields), combi_1.opt(combi_1.str("CONDITION")), new expressions_1.Cond());
    }
}
exports.Assert = Assert;
