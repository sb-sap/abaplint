"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallScreen extends _statement_1.Statement {
    getMatcher() {
        const starting = combi_1.seq(combi_1.str("STARTING AT"), new expressions_1.Source(), new expressions_1.Source());
        const ending = combi_1.seq(combi_1.str("ENDING AT"), new expressions_1.Source(), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("CALL SCREEN"), new expressions_1.Source(), combi_1.opt(combi_1.seq(starting, combi_1.opt(ending))));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CallScreen = CallScreen;
