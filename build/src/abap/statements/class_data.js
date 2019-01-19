"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ClassData extends _statement_1.Statement {
    getMatcher() {
        return combi_1.seq(combi_1.str("CLASS-DATA"), new expressions_1.DataDefinition());
    }
}
exports.ClassData = ClassData;
