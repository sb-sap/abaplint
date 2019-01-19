"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class Wait extends _statement_1.Statement {
    getMatcher() {
        const up = combi_1.seq(combi_1.str("UP TO"), new expressions_1.Source(), combi_1.str("SECONDS"));
        const channels = combi_1.seq(combi_1.alt(combi_1.str("MESSAGING"), combi_1.ver(version_1.Version.v750, combi_1.str("PUSH"))), combi_1.str("CHANNELS"));
        const tasks = combi_1.str("ASYNCHRONOUS TASKS");
        const type = combi_1.seq(combi_1.str("FOR"), combi_1.alt(channels, tasks));
        const until = combi_1.seq(combi_1.opt(type), combi_1.str("UNTIL"), new expressions_1.Cond(), combi_1.opt(up));
        const ret = combi_1.seq(combi_1.str("WAIT"), combi_1.alt(until, up));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Wait = Wait;
