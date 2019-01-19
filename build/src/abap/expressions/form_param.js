"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class FormParam extends combi_1.Expression {
    getRunnable() {
        //    let fieldName = seq(reg(/^\w+$/), optPrio(seq(tok(Dash), reg(/^\w+$/))));
        const name = combi_1.regex(/^[\w$]+$/);
        //    let dashed = seq(reg(/^\w+$/), tok(Dash), reg(/^\w+$/));
        const field = combi_1.seq(combi_1.altPrio(new _1.PassByValue(), name), combi_1.optPrio(new _1.FormParamType()));
        return field;
    }
}
exports.FormParam = FormParam;
