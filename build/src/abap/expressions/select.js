"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class Select extends combi_1.Expression {
    getRunnable() {
        const intoList = combi_1.seq(combi_1.alt(combi_1.tok(tokens_1.WParenLeft), combi_1.tok(tokens_1.WParenLeftW)), combi_1.star(combi_1.seq(new _1.SQLTarget(), combi_1.str(","))), new _1.SQLTarget(), combi_1.str(")"));
        const intoSimple = combi_1.seq(combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), new _1.SQLTarget());
        const intoTable = combi_1.seq(combi_1.alt(combi_1.str("INTO"), combi_1.str("APPENDING")), combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), combi_1.str("TABLE"), new _1.SQLTarget());
        const into = combi_1.alt(combi_1.seq(combi_1.str("INTO"), combi_1.alt(intoList, intoSimple)), intoTable);
        const connection = combi_1.seq(combi_1.str("CONNECTION"), new _1.Dynamic());
        const where = combi_1.seq(combi_1.str("WHERE"), new _1.SQLCond());
        const ding = combi_1.alt(combi_1.str("ASCENDING"), combi_1.str("DESCENDING"));
        const order = combi_1.seq(combi_1.str("ORDER BY"), combi_1.alt(combi_1.plus(combi_1.seq(new _1.Field(), combi_1.opt(ding), combi_1.opt(combi_1.str(",")))), combi_1.str("PRIMARY KEY"), new _1.Dynamic()));
        const forAll = combi_1.seq(combi_1.str("FOR ALL ENTRIES IN"), new _1.SQLSource());
        const up = combi_1.seq(combi_1.str("UP TO"), new _1.SQLSource(), combi_1.str("ROWS"));
        const client = combi_1.str("CLIENT SPECIFIED");
        const bypass = combi_1.str("BYPASSING BUFFER");
        const group = combi_1.seq(combi_1.str("GROUP BY"), combi_1.plus(combi_1.alt(new _1.Field(), new _1.Dynamic())));
        const fields = combi_1.seq(combi_1.str("FIELDS"), new _1.SQLFieldList());
        const perm = combi_1.per(new _1.SQLFrom(), into, forAll, where, order, up, client, bypass, group, fields, connection);
        const ret = combi_1.seq(combi_1.str("SELECT"), combi_1.alt(combi_1.str("DISTINCT"), combi_1.opt(combi_1.seq(combi_1.str("SINGLE"), combi_1.opt(combi_1.str("FOR UPDATE"))))), combi_1.opt(new _1.SQLFieldList()), perm);
        return ret;
    }
}
exports.Select = Select;
