"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
class MethodDefExporting extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.str("EXPORTING"), combi_1.plus(new _1.MethodParam()));
    }
}
exports.MethodDefExporting = MethodDefExporting;
