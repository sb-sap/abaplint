"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Commit extends _statement_1.Statement {
    getMatcher() {
        const work = combi_1.seq(combi_1.str("WORK"), combi_1.opt(combi_1.str("AND WAIT")));
        const connection = combi_1.seq(combi_1.str("CONNECTION"), combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic()));
        return combi_1.seq(combi_1.str("COMMIT"), combi_1.alt(work, connection));
    }
}
exports.Commit = Commit;
