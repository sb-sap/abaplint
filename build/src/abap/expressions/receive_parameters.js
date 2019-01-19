"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ReceiveParameters extends combi_1.Expression {
    getRunnable() {
        const importing = combi_1.seq(combi_1.str("IMPORTING"), new _1.ParameterListT());
        const tables = combi_1.seq(combi_1.str("TABLES"), new _1.ParameterListT());
        const changing = combi_1.seq(combi_1.str("CHANGING"), new _1.ParameterListT());
        const exceptions = combi_1.seq(combi_1.str("EXCEPTIONS"), combi_1.opt(new _1.ParameterListExceptions()), combi_1.opt(new _1.Field()));
        const long = combi_1.seq(combi_1.opt(importing), combi_1.opt(changing), combi_1.opt(tables), combi_1.opt(exceptions));
        return long;
    }
}
exports.ReceiveParameters = ReceiveParameters;
