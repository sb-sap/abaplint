"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Events extends _statement_1.Statement {
    getMatcher() {
        const par = combi_1.seq(new expressions_1.MethodParam(), combi_1.opt(combi_1.str("OPTIONAL")));
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), combi_1.plus(par));
        return combi_1.seq(combi_1.alt(combi_1.str("CLASS-EVENTS"), combi_1.str("EVENTS")), new expressions_1.Field(), combi_1.opt(exporting));
    }
}
exports.Events = Events;
