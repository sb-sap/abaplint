"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class CheckSelectOptions extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.str("CHECK SELECT-OPTIONS");
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.CheckSelectOptions = CheckSelectOptions;
