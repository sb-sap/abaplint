"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class Case extends _structure_1.Structure {
    getMatcher() {
        const when = _combi_1.seq(_combi_1.sta(Statements.When), _combi_1.star(_combi_1.sub(new normal_1.Normal())));
        return _combi_1.beginEnd(_combi_1.sta(Statements.Case), _combi_1.star(when), _combi_1.sta(Statements.EndCase));
    }
}
exports.Case = Case;
