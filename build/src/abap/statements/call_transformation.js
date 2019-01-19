"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class CallTransformation extends _statement_1.Statement {
    getMatcher() {
        const field = combi_1.seq(new expressions_1.Field(), combi_1.str("="), new expressions_1.Source());
        const options = combi_1.seq(combi_1.str("OPTIONS"), combi_1.plus(field));
        const parameters = combi_1.seq(combi_1.str("PARAMETERS"), combi_1.alt(combi_1.plus(field), new expressions_1.Dynamic()));
        const objects = combi_1.seq(combi_1.str("OBJECTS"), combi_1.alt(combi_1.plus(field), new expressions_1.Dynamic()));
        const source2 = combi_1.seq(combi_1.str("XML"), new expressions_1.Source());
        const source = combi_1.seq(combi_1.str("SOURCE"), combi_1.alt(combi_1.plus(field), source2, new expressions_1.Dynamic()));
        const result2 = combi_1.seq(combi_1.str("XML"), new expressions_1.Target());
        const result = combi_1.seq(combi_1.str("RESULT"), combi_1.alt(combi_1.plus(field), result2, new expressions_1.Dynamic()));
        const call = combi_1.seq(combi_1.str("CALL TRANSFORMATION"), combi_1.alt(new expressions_1.Field(), new expressions_1.Dynamic()), combi_1.per(options, parameters, objects, source, result));
        return call;
    }
}
exports.CallTransformation = CallTransformation;
