"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("../../abap/structures");
const Statements = require("../../abap/statements");
const Expressions = require("../../abap/expressions");
const _identifier_1 = require("./_identifier");
const form_parameter_1 = require("./form_parameter");
class FormDefinition extends _identifier_1.Identifier {
    constructor(node) {
        if (!(node.get() instanceof Structures.Form)) {
            throw new Error("FormDefinition, unexpected node type");
        }
        const name = node.findFirstStatement(Statements.Form).findFirstExpression(Expressions.FormName).getFirstToken();
        super(name, node);
        this.node = node;
    }
    getParameters() {
        const form = this.node.findFirstStatement(Statements.Form);
        if (form === undefined) {
            return [];
        }
        const res = [];
        for (const param of form.findAllExpressions(Expressions.FormParam)) {
            const token = param.getFirstToken();
            res.push(new form_parameter_1.FormParameter(token, param));
        }
        return res;
    }
}
exports.FormDefinition = FormDefinition;
