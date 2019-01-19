"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class AtSelectionScreen extends _statement_1.Statement {
    getMatcher() {
        const output = combi_1.str("OUTPUT");
        const value = combi_1.seq(combi_1.str("ON VALUE-REQUEST FOR"), new expressions_1.FieldSub());
        const exit = combi_1.str("ON EXIT-COMMAND");
        const field = combi_1.seq(combi_1.str("ON"), new expressions_1.FieldSub());
        const end = combi_1.seq(combi_1.str("ON END OF"), new expressions_1.Field());
        const radio = combi_1.seq(combi_1.str("ON RADIOBUTTON GROUP"), new expressions_1.Field());
        const block = combi_1.seq(combi_1.str("ON BLOCK"), combi_1.regex(/^\w+$/));
        const help = combi_1.seq(combi_1.str("ON HELP-REQUEST FOR"), new expressions_1.FieldSub());
        const ret = combi_1.seq(combi_1.str("AT SELECTION-SCREEN"), combi_1.opt(combi_1.alt(output, value, radio, exit, field, end, help, block)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.AtSelectionScreen = AtSelectionScreen;
