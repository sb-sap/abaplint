"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
const version_1 = require("../../version");
const sql_source_1 = require("./sql_source");
const sql_from_1 = require("./sql_from");
class SelectLoop extends combi_1.Expression {
    getRunnable() {
        const intoList = combi_1.seq(combi_1.alt(combi_1.tok(tokens_1.WParenLeft), combi_1.tok(tokens_1.WParenLeftW)), combi_1.star(combi_1.seq(new _1.Target(), combi_1.str(","))), new _1.Target(), combi_1.str(")"));
        const intoSimple = combi_1.seq(combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), combi_1.opt(combi_1.ver(version_1.Version.v740sp05, combi_1.tok(tokens_1.WAt))), new _1.Target());
        const into = combi_1.seq(combi_1.str("INTO"), combi_1.alt(intoList, intoSimple));
        const where = combi_1.seq(combi_1.str("WHERE"), new _1.SQLCond());
        const ding = combi_1.alt(combi_1.str("ASCENDING"), combi_1.str("DESCENDING"));
        const order = combi_1.seq(combi_1.str("ORDER BY"), combi_1.alt(combi_1.plus(combi_1.seq(new _1.SQLFieldName(), combi_1.opt(ding))), combi_1.str("PRIMARY KEY"), new _1.Dynamic()));
        const comma = combi_1.opt(combi_1.ver(version_1.Version.v740sp05, combi_1.str(",")));
        const someField = combi_1.seq(combi_1.alt(new _1.SQLFieldName(), new _1.SQLAggregation()), comma);
        const fieldList = combi_1.seq(combi_1.star(someField), new _1.SQLFieldName(), comma, combi_1.star(someField));
        // todo, use SQLFieldList instead
        const fields = combi_1.alt(combi_1.str("*"), new _1.Dynamic(), fieldList);
        const client = combi_1.str("CLIENT SPECIFIED");
        const bypass = combi_1.str("BYPASSING BUFFER");
        const up = combi_1.seq(combi_1.str("UP TO"), new sql_source_1.SQLSource(), combi_1.str("ROWS"));
        const pack = combi_1.seq(combi_1.str("PACKAGE SIZE"), new _1.Source());
        const forAll = combi_1.seq(combi_1.str("FOR ALL ENTRIES IN"), new sql_source_1.SQLSource());
        const group = combi_1.seq(combi_1.str("GROUP BY"), combi_1.plus(combi_1.alt(new _1.SQLFieldName(), new _1.Dynamic())));
        const from2 = combi_1.seq(combi_1.str("FROM"), new _1.DatabaseTable());
        // hmm, this is bad, PACKAGE SIZE is not part of the non-loop?
        const appending = combi_1.seq(combi_1.str("APPENDING"), combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), combi_1.str("TABLE"), new _1.SQLTarget(), combi_1.alt(combi_1.seq(from2, pack), combi_1.seq(pack, from2)));
        const intoTab = combi_1.seq(combi_1.str("INTO"), combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), combi_1.str("TABLE"), new _1.SQLTarget(), pack);
        const perm = combi_1.per(new sql_from_1.SQLFrom(), where, up, order, client, bypass, group, forAll, combi_1.alt(appending, intoTab, into));
        const ret = combi_1.seq(combi_1.str("SELECT"), fields, perm);
        return ret;
    }
}
exports.SelectLoop = SelectLoop;
