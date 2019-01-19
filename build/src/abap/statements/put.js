"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class Put extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("PUT"), new expressions_1.Field());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Put = Put;
