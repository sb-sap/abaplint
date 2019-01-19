"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class SystemCall extends _statement_1.Statement {
    getMatcher() {
        const anyy = combi_1.regex(/^.+$/);
        const ret = combi_1.seq(combi_1.str("SYSTEM-CALL"), combi_1.plus(anyy));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SystemCall = SystemCall;
