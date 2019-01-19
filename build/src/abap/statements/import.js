"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Import extends _statement_1.Statement {
    getMatcher() {
        const id = combi_1.seq(combi_1.str("ID"), new expressions_1.Source());
        const dto = combi_1.seq(combi_1.str("TO"), new expressions_1.Target());
        const client = combi_1.seq(combi_1.str("CLIENT"), new expressions_1.Source());
        const options = combi_1.per(combi_1.str("ACCEPTING PADDING"), combi_1.str("IGNORING CONVERSION ERRORS"), combi_1.str("IN CHAR-TO-HEX MODE"), combi_1.str("IGNORING STRUCTURE BOUNDARIES"), combi_1.str("ACCEPTING TRUNCATION"));
        const shared = combi_1.seq(combi_1.str("SHARED"), combi_1.alt(combi_1.str("MEMORY"), combi_1.str("BUFFER")), new expressions_1.Field(), combi_1.str("("), new expressions_1.Field(), combi_1.str(")"), combi_1.str("ID"), new expressions_1.Source());
        const buffer = combi_1.seq(combi_1.str("DATA BUFFER"), new expressions_1.Source());
        const memory = combi_1.seq(combi_1.str("MEMORY ID"), new expressions_1.Source());
        const using = combi_1.seq(combi_1.str("USING"), new expressions_1.Source());
        const table = combi_1.seq(combi_1.str("INTERNAL TABLE"), new expressions_1.Source());
        const database = combi_1.seq(combi_1.str("DATABASE"), new expressions_1.Source(), combi_1.per(dto, id, client, using));
        const source = combi_1.alt(buffer, memory, database, table, shared);
        const to = combi_1.plus(combi_1.seq(new expressions_1.ComponentChainSimple(), combi_1.alt(combi_1.str("TO"), combi_1.str("INTO")), new expressions_1.Target()));
        const toeq = combi_1.plus(combi_1.seq(new expressions_1.ComponentChainSimple(), combi_1.str("="), new expressions_1.Target()));
        const target = combi_1.alt(toeq, to, new expressions_1.Dynamic(), combi_1.plus(new expressions_1.Target()));
        const ret = combi_1.seq(combi_1.str("IMPORT"), target, combi_1.str("FROM"), source, combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Import = Import;
