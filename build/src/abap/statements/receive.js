"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Receive extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("RECEIVE RESULTS FROM FUNCTION"), new expressions_1.FunctionName(), combi_1.opt(combi_1.str("KEEPING TASK")), new expressions_1.ReceiveParameters());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Receive = Receive;
