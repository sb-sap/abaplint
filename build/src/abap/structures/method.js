"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const Structures = require("./");
const _combi_1 = require("./_combi");
class Method extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.Method), _combi_1.star(_combi_1.sub(new Structures.Normal())), _combi_1.sta(Statements.EndMethod));
    }
}
exports.Method = Method;
