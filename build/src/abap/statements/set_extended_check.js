"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class SetExtendedCheck extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("SET EXTENDED CHECK"), combi_1.alt(combi_1.str("OFF"), combi_1.str("ON")));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SetExtendedCheck = SetExtendedCheck;
