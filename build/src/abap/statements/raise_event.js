"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class RaiseEvent extends _statement_1.Statement {
    getMatcher() {
        const exporting = combi_1.seq(combi_1.str("EXPORTING"), new expressions_1.ParameterListS());
        return combi_1.seq(combi_1.str("RAISE EVENT"), new expressions_1.Field(), combi_1.opt(exporting));
    }
}
exports.RaiseEvent = RaiseEvent;
