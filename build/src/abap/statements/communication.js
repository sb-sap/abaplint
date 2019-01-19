"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Communication extends _statement_1.Statement {
    getMatcher() {
        const length = combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Target());
        const init = combi_1.seq(combi_1.str("INIT ID"), new expressions_1.Source(), combi_1.str("DESTINATION"), new expressions_1.Target());
        const allocate = combi_1.seq(combi_1.str("ALLOCATE ID"), new expressions_1.Source());
        const send = combi_1.seq(combi_1.str("SEND ID"), new expressions_1.Source(), combi_1.str("BUFFER"), new expressions_1.Target(), combi_1.opt(length));
        const deallocate = combi_1.seq(combi_1.str("DEALLOCATE ID"), new expressions_1.Source());
        const accept = combi_1.seq(combi_1.str("ACCEPT ID"), new expressions_1.Source());
        const receive = combi_1.seq(combi_1.str("RECEIVE ID"), new expressions_1.Source(), combi_1.str("BUFFER"), new expressions_1.Source(), combi_1.str("DATAINFO"), new expressions_1.Target(), combi_1.str("STATUSINFO"), new expressions_1.Target(), combi_1.str("RECEIVED"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("COMMUNICATION"), combi_1.alt(init, allocate, send, deallocate, receive, accept));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Communication = Communication;
