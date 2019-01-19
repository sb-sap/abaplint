"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
// type pool usage
class TypePools extends _statement_1.Statement {
    getMatcher() {
        const fieldName = combi_1.regex(/^\w+$/);
        const ret = combi_1.seq(combi_1.str("TYPE-POOLS"), fieldName);
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.TypePools = TypePools;
