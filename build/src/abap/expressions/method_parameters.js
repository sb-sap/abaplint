"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class MethodParameters extends combi_1.Expression {
    getRunnable() {
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new _1.ParameterListS());
        const importing = combi_1.seq(combi_1.str("IMPORTING"), new _1.ParameterListT());
        const changing = combi_1.seq(combi_1.str("CHANGING"), new _1.ParameterListT());
        const receiving = combi_1.seq(combi_1.str("RECEIVING"), new _1.ParameterT());
        const exceptions = combi_1.seq(combi_1.str("EXCEPTIONS"), new _1.ParameterListExceptions());
        const long = combi_1.seq(combi_1.opt(exporting), combi_1.opt(importing), combi_1.opt(changing), combi_1.opt(receiving), combi_1.opt(exceptions));
        return long;
    }
}
exports.MethodParameters = MethodParameters;
