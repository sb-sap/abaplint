"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class ClassDefinition extends _statement_1.Statement {
    getMatcher() {
        const create = combi_1.seq(combi_1.str("CREATE"), combi_1.alt(combi_1.str("PUBLIC"), combi_1.str("PROTECTED"), combi_1.str("PRIVATE")));
        const level = combi_1.alt(combi_1.str("CRITICAL"), combi_1.str("HARMLESS"), combi_1.str("DANGEROUS"));
        const risk = combi_1.seq(combi_1.str("RISK LEVEL"), level);
        const time = combi_1.alt(combi_1.str("LONG"), combi_1.str("MEDIUM"), combi_1.str("SHORT"));
        const duration = combi_1.seq(combi_1.str("DURATION"), time);
        const blah = combi_1.per(new expressions_1.ClassGlobal(), new expressions_1.ClassFinal(), combi_1.str("ABSTRACT"), combi_1.seq(combi_1.str("INHERITING FROM"), new expressions_1.SuperClassName()), create, combi_1.str("FOR TESTING"), risk, combi_1.str("SHARED MEMORY ENABLED"), duration, combi_1.seq(combi_1.opt(combi_1.str("GLOBAL")), combi_1.str("FRIENDS"), combi_1.plus(new expressions_1.ClassName())));
        const def = combi_1.seq(combi_1.str("DEFINITION"), combi_1.opt(blah));
        return combi_1.seq(combi_1.str("CLASS"), new expressions_1.ClassName(), def);
    }
}
exports.ClassDefinition = ClassDefinition;
