"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class Catch extends _structure_1.Structure {
    getMatcher() {
        const normal = _combi_1.star(_combi_1.sub(new normal_1.Normal()));
        const cat = _combi_1.seq(_combi_1.sta(Statements.Catch), normal);
        return cat;
    }
}
exports.Catch = Catch;
