"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _typed_identifier_1 = require("../types/_typed_identifier");
const nodes_1 = require("../nodes");
const Expressions = require("../expressions");
const Statements = require("../statements");
class LocalIdentifier extends _typed_identifier_1.TypedIdentifier {
}
class Inline {
    constructor(variables, reg) {
        this.variables = variables;
        this.reg = reg;
    }
    addVariable(expr) {
        if (expr === undefined) {
            throw new Error("syntax_check, unexpected tree structure");
        }
        // todo, these identifers should be possible to create from a Node
        // todo, how to determine the real types?
        const token = expr.getFirstToken();
        this.variables.add(new LocalIdentifier(token, expr));
    }
    update(node) {
        if (node instanceof nodes_1.StatementNode) {
            for (const inline of node.findAllExpressions(Expressions.InlineData)) {
                const field = inline.findFirstExpression(Expressions.Field);
                if (field === undefined) {
                    throw new Error("syntax_check, unexpected tree structure");
                }
                this.addVariable(field);
            }
            for (const inline of node.findAllExpressions(Expressions.InlineFor)) {
                const field = inline.findFirstExpression(Expressions.Field);
                if (field !== undefined) {
                    this.addVariable(field);
                    // todo, these also have to be popped after the statement
                }
            }
            if (node.get() instanceof Statements.Select || node.get() instanceof Statements.SelectLoop) {
                const fromList = node.findAllExpressions(Expressions.SQLFromSource);
                for (const from of fromList) {
                    const dbtab = from.findFirstExpression(Expressions.DatabaseTable);
                    if (dbtab === undefined) {
                        continue;
                    }
                    let name = dbtab.getFirstToken().getStr();
                    const fields = this.findFields(name);
                    const asName = from.findFirstExpression(Expressions.SQLAsName);
                    if (asName) {
                        name = asName.getFirstToken().getStr();
                    }
                    for (const field of fields) {
                        this.variables.addOther(name + "~" + field);
                    }
                    // todo, these also have to be popped after the statement
                }
            }
        }
    }
    findFields(name) {
        const table = this.reg.getObject("TABL", name);
        if (table !== undefined) {
            return table.getFields();
        }
        const view = this.reg.getObject("VIEW", name);
        if (view !== undefined) {
            return view.getFields();
        }
        throw new Error("Database table or view \"" + name + "\" not found");
    }
}
exports.Inline = Inline;
