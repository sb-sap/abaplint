"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class FSTarget extends combi_1.Expression {
    getRunnable() {
        return combi_1.alt(new _1.InlineFS(), new _1.FieldSymbol());
    }
}
exports.FSTarget = FSTarget;
