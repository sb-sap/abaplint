"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class EndOfPage extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.str("END-OF-PAGE");
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.EndOfPage = EndOfPage;
