"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _structure_1 = require("./_structure");
const Statements = require("../statements");
const _combi_1 = require("./_combi");
const _1 = require(".");
class SectionContents extends _structure_1.Structure {
    getMatcher() {
        // todo, start should be plus instead?
        return _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.MethodDef), _combi_1.sta(Statements.InterfaceDef), _combi_1.sta(Statements.Data), _combi_1.sta(Statements.ClassData), _combi_1.sta(Statements.Events), _combi_1.sta(Statements.Constant), _combi_1.sta(Statements.Aliases), _combi_1.sta(Statements.TypePools), _combi_1.sta(Statements.InterfaceLoad), _combi_1.sta(Statements.ClassDefinitionLoad), _combi_1.sub(new _1.Types()), _combi_1.sub(new _1.Constants()), _combi_1.sub(new _1.TypeEnum()), _combi_1.sub(new _1.Data()), _combi_1.sub(new _1.ClassData()), _combi_1.sta(Statements.Type)));
    }
}
exports.SectionContents = SectionContents;
