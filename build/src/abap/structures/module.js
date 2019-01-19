"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class Module extends _structure_1.Structure {
    getMatcher() {
        const body = _combi_1.alt(_combi_1.sub(new normal_1.Normal()), _combi_1.sta(Statements.Ranges), _combi_1.sta(Statements.Tables));
        return _combi_1.beginEnd(_combi_1.sta(Statements.Module), _combi_1.star(body), _combi_1.sta(Statements.EndModule));
    }
}
exports.Module = Module;
