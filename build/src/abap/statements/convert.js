"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Convert extends _statement_1.Statement {
    getMatcher() {
        const intoTime = combi_1.seq(combi_1.str("TIME"), new expressions_1.Target());
        const intoDate = combi_1.seq(combi_1.str("DATE"), new expressions_1.Target());
        const into = combi_1.seq(combi_1.str("INTO"), combi_1.per(intoTime, intoDate));
        const daylight = combi_1.seq(combi_1.str("DAYLIGHT SAVING TIME"), new expressions_1.Source());
        const zone = combi_1.seq(combi_1.str("TIME ZONE"), new expressions_1.Source());
        const time = combi_1.seq(combi_1.str("TIME STAMP"), new expressions_1.Source(), combi_1.per(zone, into, daylight));
        const dat = combi_1.seq(combi_1.str("DATE"), new expressions_1.Source());
        const tim = combi_1.seq(combi_1.str("TIME"), new expressions_1.Source());
        const stamp = combi_1.seq(combi_1.str("INTO TIME STAMP"), new expressions_1.Target());
        const invert = combi_1.seq(combi_1.str("INTO INVERTED-DATE"), new expressions_1.Target());
        const date = combi_1.seq(combi_1.per(dat, tim), combi_1.per(daylight, stamp, zone, invert));
        const inv = combi_1.seq(combi_1.str("INVERTED-DATE"), new expressions_1.Source(), combi_1.str("INTO DATE"), new expressions_1.Target());
        return combi_1.seq(combi_1.str("CONVERT"), combi_1.alt(time, date, inv));
    }
}
exports.Convert = Convert;
