"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("./");
const _structure_1 = require("./_structure");
const Statements = require("../statements");
const _combi_1 = require("./_combi");
class ClassGlobal extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.seq(_combi_1.star(_combi_1.sta(Statements.TypePools)), _combi_1.sub(new Structures.ClassDefinition()), _combi_1.sub(new Structures.ClassImplementation()));
    }
}
exports.ClassGlobal = ClassGlobal;
