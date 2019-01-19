"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
class ClassData extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.ClassDataBegin), _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.ClassData), _combi_1.sub(new ClassData()))), _combi_1.sta(Statements.ClassDataEnd));
    }
}
exports.ClassData = ClassData;
