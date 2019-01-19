"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class InlineFor extends combi_1.Expression {
    getRunnable() {
        return combi_1.alt(new _1.Field(), new _1.FieldSymbol());
    }
}
exports.InlineFor = InlineFor;
