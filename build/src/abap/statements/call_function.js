"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallFunction extends _statement_1.Statement {
    getMatcher() {
        const starting = combi_1.seq(combi_1.str("STARTING NEW TASK"), combi_1.alt(new expressions_1.Constant(), new expressions_1.FieldSub()));
        const update = combi_1.str("IN UPDATE TASK");
        const unit = combi_1.seq(combi_1.str("UNIT"), new expressions_1.Source());
        const background = combi_1.seq(combi_1.str("IN BACKGROUND"), combi_1.alt(combi_1.str("TASK"), unit));
        const dest = combi_1.seq(combi_1.str("DESTINATION"), combi_1.opt(combi_1.str("IN GROUP")), new expressions_1.Source());
        const calling = combi_1.seq(combi_1.str("CALLING"), new expressions_1.FieldChain(), combi_1.str("ON END OF TASK"));
        const performing = combi_1.seq(combi_1.str("PERFORMING"), new expressions_1.FormName(), combi_1.str("ON END OF TASK"));
        const separate = combi_1.str("AS SEPARATE UNIT");
        const options = combi_1.per(starting, update, background, dest, calling, performing, separate);
        const dynamic = combi_1.seq(combi_1.str("PARAMETER-TABLE"), new expressions_1.Source(), combi_1.opt(combi_1.seq(combi_1.str("EXCEPTION-TABLE"), new expressions_1.Source())));
        const call = combi_1.seq(combi_1.str("CALL"), combi_1.alt(combi_1.str("FUNCTION"), combi_1.verNot(version_1.Version.Cloud, combi_1.str("CUSTOMER-FUNCTION"))), new expressions_1.FunctionName(), combi_1.opt(options), combi_1.alt(new expressions_1.FunctionParameters(), dynamic));
        return call;
    }
}
exports.CallFunction = CallFunction;
