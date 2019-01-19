"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _basic_node_1 = require("./_basic_node");
const statement_node_1 = require("./statement_node");
class StructureNode extends _basic_node_1.BasicNode {
    constructor(structure) {
        super();
        this.structure = structure;
    }
    get() {
        return this.structure;
    }
    findParent(node) {
        for (const child of this.getChildren()) {
            if (child === node) {
                return this;
            }
            else if (child instanceof statement_node_1.StatementNode) {
                continue;
            }
            else if (child instanceof StructureNode) {
                const res = child.findParent(node);
                if (res) {
                    return res;
                }
            }
            else {
                throw new Error("findParent, unexpected type");
            }
        }
        return undefined;
    }
    findFirstStatement(type) {
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                return child;
            }
            else if (child instanceof statement_node_1.StatementNode) {
                continue;
            }
            else if (child instanceof StructureNode) {
                const res = child.findFirstStatement(type);
                if (res) {
                    return res;
                }
            }
            else {
                throw new Error("findFirstStatement, unexpected type");
            }
        }
        return undefined;
    }
    findFirstExpression(type) {
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                return child;
            }
            else if (child instanceof statement_node_1.StatementNode) {
                const res = child.findFirstExpression(type);
                if (res) {
                    return res;
                }
            }
            else if (child instanceof StructureNode) {
                const res = child.findFirstExpression(type);
                if (res) {
                    return res;
                }
            }
            else {
                throw new Error("findFirstStatement, unexpected type");
            }
        }
        return undefined;
    }
    getFirstToken() {
        const child = this.getFirstChild();
        if (child instanceof statement_node_1.StatementNode) {
            return child.getFirstToken();
        }
        else if (child instanceof StructureNode) {
            return child.getFirstToken();
        }
        throw new Error("getFirstToken, unexpected type");
    }
    getLastToken() {
        const child = this.getLastChild();
        if (child instanceof statement_node_1.StatementNode) {
            return child.getLastToken();
        }
        else if (child instanceof StructureNode) {
            return child.getLastToken();
        }
        throw new Error("getLastToken, unexpected type");
    }
    findAllExpressions(type) {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child instanceof statement_node_1.StatementNode) {
                ret = ret.concat(child.findAllExpressions(type));
            }
            else if (child instanceof StructureNode) {
                ret = ret.concat(child.findAllExpressions(type));
            }
            else {
                throw new Error("findAllExpressions, unexpected type");
            }
        }
        return ret;
    }
    findAllStatements(type) {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                ret.push(child);
            }
            else if (child instanceof statement_node_1.StatementNode) {
                continue;
            }
            else if (child instanceof StructureNode) {
                ret = ret.concat(child.findAllStatements(type));
            }
            else {
                throw new Error("findFirstStructure, unexpected type");
            }
        }
        return ret;
    }
    findAllStatementNodes() {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child instanceof statement_node_1.StatementNode) {
                ret.push(child);
            }
            else if (child instanceof StructureNode) {
                ret = ret.concat(child.findAllStatementNodes());
            }
            else {
                throw new Error("findAllStatementNodes, unexpected type");
            }
        }
        return ret;
    }
    findAllStructures(type) {
        let ret = [];
        if (this.get() instanceof type) {
            return [this];
        }
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                ret.push(child);
            }
            else if (child instanceof statement_node_1.StatementNode) {
                continue;
            }
            else if (child instanceof StructureNode) {
                ret = ret.concat(child.findAllStructures(type));
            }
            else {
                throw new Error("findAllStructures, unexpected type");
            }
        }
        return ret;
    }
    findFirstStructure(type) {
        if (this.get() instanceof type) {
            return this;
        }
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                return child;
            }
            else if (child instanceof statement_node_1.StatementNode) {
                continue;
            }
            else if (child instanceof StructureNode) {
                const res = child.findFirstStructure(type);
                if (res) {
                    return res;
                }
            }
            else {
                throw new Error("findFirstStructure, unexpected type");
            }
        }
        return undefined;
    }
}
exports.StructureNode = StructureNode;
