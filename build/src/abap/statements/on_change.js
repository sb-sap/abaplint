"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class OnChange extends _statement_1.Statement {
    getMatcher() {
        const or = combi_1.seq(combi_1.str("OR"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("ON CHANGE OF"), new expressions_1.Target(), combi_1.star(or));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.OnChange = OnChange;
