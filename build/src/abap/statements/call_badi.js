"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class CallBadi extends _statement_1.Statement {
    getMatcher() {
        const call = combi_1.seq(combi_1.str("CALL"), combi_1.str("BADI"), new expressions_1.MethodSource(), new expressions_1.MethodCallBody());
        return combi_1.verNot(version_1.Version.Cloud, call);
    }
}
exports.CallBadi = CallBadi;
