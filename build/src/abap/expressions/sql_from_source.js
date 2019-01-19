"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class SQLFromSource extends combi_1.Expression {
    getRunnable() {
        const aas = combi_1.seq(combi_1.str("AS"), new _1.SQLAsName());
        return combi_1.seq(combi_1.alt(new _1.Dynamic(), combi_1.seq(new _1.DatabaseTable(), combi_1.opt(new _1.SQLCDSParameters()))), combi_1.opt(aas));
    }
}
exports.SQLFromSource = SQLFromSource;
