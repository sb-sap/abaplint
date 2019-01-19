"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
class Constants extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.ConstantBegin), _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.Constant), _combi_1.sub(new Constants()))), _combi_1.sta(Statements.ConstantEnd));
    }
}
exports.Constants = Constants;
