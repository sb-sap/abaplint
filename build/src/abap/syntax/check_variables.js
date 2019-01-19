"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const Expressions = require("../expressions");
const Statements = require("../statements");
const nodes_1 = require("../nodes");
const _variables_1 = require("./_variables");
const _object_oriented_1 = require("./_object_oriented");
const _globals_1 = require("./_globals");
const _procedural_1 = require("./_procedural");
const _inline_1 = require("./_inline");
// todo, some visualization, graphviz?
class CheckVariablesLogic {
    constructor(reg, object) {
        this.reg = reg;
        this.issues = [];
        this.object = object;
        this.variables = new _variables_1.Variables();
        this.oooc = new _object_oriented_1.ObjectOriented(this.object, this.reg, this.variables);
        this.proc = new _procedural_1.Procedural(this.object, this.reg, this.variables);
        this.inline = new _inline_1.Inline(this.variables, this.reg);
    }
    findIssues(ignoreParserError = true) {
        this.variables.addList(_globals_1.Globals.get());
        for (const file of this.object.getABAPFiles()) {
            this.currentFile = file;
            // assumption: objects are parsed without parsing errors
            const structure = this.currentFile.getStructure();
            if (structure === undefined) {
                if (ignoreParserError) {
                    return [];
                }
                else {
                    throw new Error("Parser error");
                }
            }
            this.traverse(structure);
        }
        return this.issues;
    }
    // todo, this assumes no tokes are the same across files
    resolveToken(token) {
        this.variables.addList(_globals_1.Globals.get());
        for (const file of this.object.getABAPFiles()) {
            this.currentFile = file;
            // assumption: objects are parsed without parsing errors
            const structure = this.currentFile.getStructure();
            if (structure === undefined) {
                return undefined;
            }
            const ret = this.traverse(structure, token);
            if (ret) {
                return ret;
            }
        }
        return undefined;
    }
    /////////////////////////////
    newIssue(token, message) {
        this.issues.push(new issue_1.Issue({
            file: this.currentFile,
            message: message,
            key: "check_variables",
            start: token.getPos(),
        }));
    }
    traverse(node, search) {
        try {
            this.inline.update(node);
        }
        catch (e) {
            this.newIssue(node.getFirstToken(), e.message);
        }
        // todo, the same variables can be checked multiple times? as Expressions are nested
        if (node instanceof nodes_1.ExpressionNode
            && (node.get() instanceof Expressions.Source || node.get() instanceof Expressions.Target)) {
            for (const field of node.findAllExpressions(Expressions.Field)) {
                const token = field.getFirstToken();
                const resolved = this.variables.resolve(token.getStr());
                if (resolved === undefined) {
                    this.newIssue(token, "\"" + token.getStr() + "\" not found");
                }
                else if (search
                    && search.getStr() === token.getStr()
                    && search.getCol() === token.getCol()
                    && search.getRow() === token.getRow()) {
                    return resolved;
                }
            }
        }
        for (const child of node.getChildren()) {
            try {
                this.updateVariables(child);
            }
            catch (e) {
                this.newIssue(child.getFirstToken(), e.message);
            }
            const resolved = this.traverse(child, search);
            if (resolved) {
                return resolved;
            }
        }
        return undefined;
    }
    updateVariables(node) {
        // todo, align statements, eg is NamespaceSimpleName a definition or is it Field, or something new?
        // todo, and introduce SimpleSource?
        if (!(node instanceof nodes_1.StatementNode)) {
            return;
        }
        const sub = node.get();
        this.proc.findDefinitions(node);
        if (sub instanceof Statements.Form) {
            this.proc.findFormScope(node);
        }
        else if (sub instanceof Statements.FunctionModule) {
            this.proc.findFunctionScope(node);
        }
        else if (sub instanceof Statements.Method) {
            this.oooc.methodImplementation(node);
        }
        else if (sub instanceof Statements.ClassDefinition) {
            this.oooc.classDefinition(node);
        }
        else if (sub instanceof Statements.ClassImplementation) {
            this.oooc.classImplementation(node);
        }
        else if (sub instanceof Statements.EndForm
            || sub instanceof Statements.EndMethod
            || sub instanceof Statements.EndFunction
            || sub instanceof Statements.EndClass) {
            this.variables.popScope();
        }
    }
}
exports.CheckVariablesLogic = CheckVariablesLogic;
