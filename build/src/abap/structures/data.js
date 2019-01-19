"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
class Data extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.DataBegin), _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.Data), _combi_1.sub(new Data()), _combi_1.sta(Statements.IncludeType))), _combi_1.sta(Statements.DataEnd));
    }
}
exports.Data = Data;
