"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
class TopOfPage extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("TOP-OF-PAGE"), combi_1.opt(combi_1.str("DURING LINE-SELECTION")));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.TopOfPage = TopOfPage;
