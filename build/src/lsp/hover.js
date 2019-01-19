"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LServer = require("vscode-languageserver-protocol");
const nodes_1 = require("../abap/nodes");
const check_variables_1 = require("../abap/syntax/check_variables");
const _typed_identifier_1 = require("../abap/types/_typed_identifier");
const _abap_object_1 = require("../objects/_abap_object");
class Hover {
    static find(reg, uri, line, character) {
        const file = reg.getABAPFile(uri);
        if (file === undefined) {
            return undefined;
        }
        let ret = undefined;
        for (const statement of file.getStatements()) {
            for (const token of statement.getTokens()) {
                // assumption: no tokens span multiple lines
                if (token.getRow() - 1 === line
                    && token.getCol() - 1 <= character
                    && token.getCol() - 1 + token.getStr().length > character) {
                    let value = "```abap\n" + token.getStr() + "\n```\n" +
                        "Statement: " + statement.get().constructor.name + "\n\n" +
                        "Token: " + token.constructor.name;
                    const full = this.fullPath(file, token);
                    value = value + full.value;
                    if (full.keyword === true) {
                        value = value + "\n\nIs a ABAP keyword";
                    }
                    else {
                        const obj = reg.getObject(file.getObjectType(), file.getObjectName());
                        if (obj instanceof _abap_object_1.ABAPObject) {
                            const resolved = new check_variables_1.CheckVariablesLogic(reg, obj).resolveToken(token);
                            if (resolved === undefined) {
                                value = value + "\n\nNot resolved";
                            }
                            else if (resolved instanceof _typed_identifier_1.TypedIdentifier) {
                                value = value + "\n\nResolved";
                            }
                        }
                        else {
                            value = value + "\n\nNot an ABAP object.";
                        }
                    }
                    ret = { kind: LServer.MarkupKind.Markdown, value };
                    break;
                }
            }
            if (ret !== undefined) {
                break;
            }
        }
        return ret;
    }
    static fullPath(file, token) {
        const structure = file.getStructure();
        if (structure === undefined) {
            return { value: "", keyword: false };
        }
        const found = this.traverse(structure, "", token);
        if (found === undefined) {
            return { value: "", keyword: false };
        }
        return { value: "\n\n" + found.value, keyword: found.keyword };
    }
    static traverse(node, parents, search) {
        let local = parents;
        if (local !== "") {
            local = local + " -> ";
        }
        if (node instanceof nodes_1.StructureNode) {
            local = local + "Structure: " + node.get().constructor.name;
        }
        else if (node instanceof nodes_1.StatementNode) {
            local = local + "Statement: " + node.get().constructor.name;
        }
        else if (node instanceof nodes_1.ExpressionNode) {
            local = local + "Expression: " + node.get().constructor.name;
        }
        else if (node instanceof nodes_1.TokenNode) {
            local = local + "Token: " + node.get().constructor.name;
            const token = node.get();
            if (token.getStr() === search.getStr()
                && token.getCol() === search.getCol()
                && token.getRow() === search.getRow()) {
                const keyword = !(node instanceof nodes_1.TokenNodeRegex);
                return { value: local, keyword };
            }
        }
        else {
            throw new Error("hover, traverse, unexpected node type");
        }
        for (const child of node.getChildren()) {
            const ret = this.traverse(child, local, search);
            if (ret) {
                return ret;
            }
        }
        return undefined;
    }
}
exports.Hover = Hover;
