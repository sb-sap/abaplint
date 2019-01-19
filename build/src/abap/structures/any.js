"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _combi_1 = require("./_combi");
const Structures = require("./");
const Statements = require("../statements");
const _structure_1 = require("./_structure");
class Any extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.ClassOther), _combi_1.sta(Statements.Report), _combi_1.sta(Statements.Program), _combi_1.sta(Statements.Parameter), _combi_1.sta(Statements.CheckSelectOptions), _combi_1.sta(Statements.Get), _combi_1.sta(Statements.Initialization), _combi_1.sta(Statements.InterfaceDeferred), _combi_1.sta(Statements.SelectionScreen), _combi_1.sta(Statements.SelectOption), _combi_1.sta(Statements.AtSelectionScreen), _combi_1.sta(Statements.AtLineSelection), _combi_1.sta(Statements.AtUserCommand), _combi_1.sta(Statements.StartOfSelection), _combi_1.sta(Statements.EndOfSelection), _combi_1.sta(Statements.LoadOfProgram), _combi_1.sta(Statements.TopOfPage), _combi_1.sta(Statements.EndOfPage), _combi_1.sta(Statements.Controls), _combi_1.sta(Statements.TypePools), _combi_1.sta(Statements.TypePool), _combi_1.sta(Statements.FunctionPool), _combi_1.sub(new Structures.Normal()), _combi_1.sub(new Structures.Form()), _combi_1.sub(new Structures.Module()), _combi_1.sub(new Structures.FunctionModule()), _combi_1.sub(new Structures.Interface()), _combi_1.sub(new Structures.ClassDefinition()), _combi_1.sub(new Structures.ClassImplementation())));
    }
}
exports.Any = Any;
