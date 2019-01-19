"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Expressions = require("../expressions");
const Statements = require("../statements");
const _typed_identifier_1 = require("../types/_typed_identifier");
const files_1 = require("../../files");
const _globals_1 = require("./_globals");
// todo, rename this class?
class LocalIdentifier extends _typed_identifier_1.TypedIdentifier {
}
class Procedural {
    constructor(obj, _reg, variables) {
        this.obj = obj;
        this.variables = variables;
        //    this.reg = reg;
    }
    findDefinitions(node) {
        const sub = node.get();
        const ret = [];
        if (sub instanceof Statements.Data
            || sub instanceof Statements.DataBegin
            || sub instanceof Statements.Constant
            || sub instanceof Statements.ConstantBegin
            || sub instanceof Statements.Static
            || sub instanceof Statements.StaticBegin) {
            ret.push(this.addVariable(node.findFirstExpression(Expressions.NamespaceSimpleName)));
        }
        else if (sub instanceof Statements.Parameter) {
            ret.push(this.addVariable(node.findFirstExpression(Expressions.FieldSub)));
        }
        else if (sub instanceof Statements.Tables || sub instanceof Statements.SelectOption) {
            ret.push(this.addVariable(node.findFirstExpression(Expressions.Field)));
        }
        this.variables.addList(ret);
    }
    findFunctionScope(node) {
        this.variables.pushScope("function");
        const name = node.findFirstExpression(Expressions.FunctionName).getFirstToken().getStr();
        const definition = this.obj.getModule(name);
        if (definition === undefined) {
            throw new Error("Function group definition \"" + name + "\" not found");
        }
        let abap = "";
        for (const param of definition.getParameters()) {
            abap = abap + "DATA " + param + " TYPE c.\n"; // todo, not correct type
        }
        const file = new files_1.MemoryFile("_function_module.prog.abap", abap);
        this.variables.addList(_globals_1.Globals.typesInFile(file));
    }
    findFormScope(node) {
        this.variables.pushScope("form");
        const formName = node.findFirstExpression(Expressions.FormName).getFirstToken().getStr();
        const form = this.findDefinition(formName);
        if (form === undefined) {
            throw new Error("Form definition \"" + formName + "\" not found");
        }
        this.variables.addList(form.getParameters());
    }
    findDefinition(name) {
        for (const file of this.obj.getABAPFiles()) {
            const found = file.getFormDefinition(name);
            if (found) {
                return found;
            }
        }
        throw new Error("FORM defintion for \"" + name + "\" not found");
    }
    addVariable(expr) {
        if (expr === undefined) {
            throw new Error("syntax_check, unexpected tree structure");
        }
        // todo, these identifers should be possible to create from a Node
        // todo, how to determine the real types?
        const token = expr.getFirstToken();
        return new LocalIdentifier(token, expr);
    }
}
exports.Procedural = Procedural;
