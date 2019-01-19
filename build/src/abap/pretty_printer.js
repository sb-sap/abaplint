"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("./statements");
const _statement_1 = require("./statements/_statement");
const nodes_1 = require("./nodes");
const tokens_1 = require("./tokens");
// todo, will break if there is multiple statements per line?
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    pop() {
        const peek = this.peek();
        this.items = this.items.slice(0, this.items.length - 1);
        return peek;
    }
}
class Indentation {
    // returns list of expected indentation for each line/statement?
    static run(file) {
        const ret = [];
        const init = 1;
        let indent = init;
        let parentIsEvent = false;
        const stack = new Stack();
        for (const statement of file.getStatements()) {
            const type = statement.get();
            if (type instanceof Statements.EndIf
                || type instanceof Statements.EndWhile
                || type instanceof Statements.EndModule
                || type instanceof Statements.EndSelect
                || type instanceof Statements.EndMethod
                || type instanceof Statements.EndAt
                || type instanceof Statements.Else
                || type instanceof Statements.EndOfDefinition
                || type instanceof Statements.EndLoop
                || type instanceof Statements.EndForm
                || type instanceof Statements.ElseIf
                || type instanceof Statements.EndFunction
                || type instanceof Statements.EndInterface
                || type instanceof Statements.EndDo) {
                indent = indent - 2;
            }
            else if (type instanceof Statements.StartOfSelection
                || type instanceof Statements.AtSelectionScreen
                || type instanceof Statements.Initialization
                || type instanceof Statements.EndOfSelection
                || type instanceof Statements.LoadOfProgram) {
                indent = init;
                parentIsEvent = true;
            }
            else if (type instanceof Statements.Form
                || (type instanceof Statements.Include && parentIsEvent)
                || type instanceof Statements.Module
                || type instanceof Statements.ClassImplementation
                || type instanceof Statements.ClassDefinition) {
                indent = init;
                parentIsEvent = false;
            }
            else if (type instanceof Statements.Cleanup
                || type instanceof Statements.Catch) {
                indent = stack.peek() - 2;
            }
            else if (type instanceof Statements.Public
                || type instanceof Statements.Protected
                || type instanceof Statements.Private
                || type instanceof Statements.When) {
                indent = stack.peek();
            }
            else if (type instanceof Statements.EndTry) {
                indent = stack.pop() - 4;
            }
            else if (type instanceof Statements.EndClass
                || type instanceof Statements.EndCase) {
                indent = stack.pop() - 2;
            }
            else if (type instanceof _statement_1.Comment
                || type instanceof Statements.IncludeType
                || type instanceof _statement_1.Empty
                || type instanceof _statement_1.MacroContent) {
                ret.push(-1);
                continue;
            }
            ret.push(indent);
            if (type instanceof Statements.If
                || type instanceof Statements.While
                || type instanceof Statements.Module
                || type instanceof Statements.SelectLoop
                || type instanceof Statements.FunctionModule
                || type instanceof Statements.Interface
                || type instanceof Statements.Do
                || type instanceof Statements.At
                || type instanceof Statements.Catch
                || type instanceof Statements.Define
                || type instanceof Statements.When
                || type instanceof Statements.Cleanup
                || type instanceof Statements.Loop
                || type instanceof Statements.Form
                || type instanceof Statements.Else
                || type instanceof Statements.ElseIf
                || type instanceof Statements.Method
                || type instanceof Statements.StartOfSelection
                || type instanceof Statements.AtSelectionScreen
                || type instanceof Statements.LoadOfProgram
                || type instanceof Statements.Initialization
                || type instanceof Statements.EndOfSelection
                || type instanceof Statements.Public
                || type instanceof Statements.Protected
                || type instanceof Statements.Private) {
                indent = indent + 2;
            }
            else if (type instanceof Statements.Try) {
                indent = indent + 4;
                stack.push(indent);
            }
            else if (type instanceof Statements.ClassDefinition
                || type instanceof Statements.Case
                || type instanceof Statements.ClassImplementation) {
                indent = indent + 2;
                stack.push(indent);
            }
        }
        return ret;
    }
}
class PrettyPrinter {
    constructor(file) {
        this.result = file.getRaw();
        this.file = file;
    }
    run() {
        const statements = this.file.getStatements();
        for (const statement of statements) {
            if (statement.get() instanceof _statement_1.Unknown
                || statement.get() instanceof _statement_1.MacroContent
                || statement.get() instanceof _statement_1.MacroCall
                || statement.get() instanceof _statement_1.Comment) {
                continue;
            }
            // note that no positions are changed during a upperCaseKeys operation
            this.upperCaseKeywords(statement);
        }
        this.indentCode();
        return this.result;
    }
    getExpectedIndentation() {
        return Indentation.run(this.file);
    }
    indentCode() {
        const statements = this.file.getStatements();
        const expected = this.getExpectedIndentation();
        if (expected.length !== statements.length) {
            throw new Error("Pretty Printer, expected lengths to match");
        }
        const lines = this.result.split("\n");
        for (const statement of statements) {
            const exp = expected.shift();
            if (exp === undefined || exp < 0) {
                continue;
            }
            const row = statement.getFirstToken().getPos().getRow() - 1;
            lines[row] = lines[row].trim();
            for (let i = 1; i < exp; i++) {
                lines[row] = " " + lines[row];
            }
        }
        this.result = lines.join("\n");
    }
    replaceString(pos, str) {
        const lines = this.result.split("\n");
        const line = lines[pos.getRow() - 1];
        lines[pos.getRow() - 1] = line.substr(0, pos.getCol() - 1) + str + line.substr(pos.getCol() + str.length - 1);
        this.result = lines.join("\n");
    }
    upperCaseKeywords(s) {
        for (const child of s.getChildren()) {
            if (child instanceof nodes_1.TokenNodeRegex) {
                continue;
            }
            else if (child instanceof nodes_1.TokenNode) {
                const token = child.get();
                const str = token.getStr();
                if (str !== str.toUpperCase() && token instanceof tokens_1.Identifier) {
                    this.replaceString(token.getPos(), str.toUpperCase());
                }
            }
            else if (child instanceof nodes_1.ExpressionNode) {
                this.upperCaseKeywords(child);
            }
            else {
                throw new Error("pretty printer, traverse, unexpected node type");
            }
        }
    }
}
exports.PrettyPrinter = PrettyPrinter;
