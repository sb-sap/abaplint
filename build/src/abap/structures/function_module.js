"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class FunctionModule extends _structure_1.Structure {
    getMatcher() {
        const body = _combi_1.alt(_combi_1.sta(Statements.Tables), _combi_1.sta(Statements.TypePools), _combi_1.sta(Statements.Ranges), _combi_1.sub(new normal_1.Normal()));
        return _combi_1.beginEnd(_combi_1.sta(Statements.FunctionModule), _combi_1.star(body), _combi_1.sta(Statements.EndFunction));
    }
}
exports.FunctionModule = FunctionModule;
