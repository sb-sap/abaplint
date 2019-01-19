"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _countable_node_1 = require("./_countable_node");
const token_node_1 = require("./token_node");
class ExpressionNode extends _countable_node_1.CountableNode {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    get() {
        return this.expression;
    }
    getFirstToken() {
        for (const child of this.getChildren()) {
            if (child instanceof token_node_1.TokenNode) {
                return child.get();
            }
            else if (child instanceof ExpressionNode) {
                return child.getFirstToken();
            }
        }
        throw new Error("getFirstToken, unexpected type");
    }
    getLastToken() {
        const child = this.getLastChild();
        if (child instanceof token_node_1.TokenNode) {
            return child.get();
        }
        else if (child instanceof ExpressionNode) {
            return child.getLastToken();
        }
        throw new Error("getLastToken, unexpected type");
    }
    getAllTokens() {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child instanceof token_node_1.TokenNode) {
                ret.push(child.get());
            }
            else if (child instanceof ExpressionNode) {
                ret = ret.concat(child.getAllTokens());
            }
            else {
                throw new Error("getAllTokens, unexpected type");
            }
        }
        return ret;
    }
    findDirectTokenByText(text) {
        for (const child of this.getChildren()) {
            if (child instanceof token_node_1.TokenNode) {
                if (child.get().getStr() === text) {
                    return child.get();
                }
            }
            else if (child instanceof ExpressionNode) {
                continue;
            }
            else {
                throw new Error("findDirectTokenByText, unexpected type");
            }
        }
        return undefined;
    }
    findAllExpressions(type) {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                ret.push(child);
            }
            else if (child instanceof token_node_1.TokenNode) {
                continue;
            }
            else if (child instanceof ExpressionNode) {
                ret = ret.concat(child.findAllExpressions(type));
            }
            else {
                throw new Error("findAllExpressions, unexpected type");
            }
        }
        return ret;
    }
    findFirstExpression(type) {
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                return child;
            }
            else if (child instanceof token_node_1.TokenNode) {
                continue;
            }
            else if (child instanceof ExpressionNode) {
                const res = child.findFirstExpression(type);
                if (res) {
                    return res;
                }
            }
            else {
                throw new Error("findFirstExpression, unexpected type");
            }
        }
        return undefined;
    }
}
exports.ExpressionNode = ExpressionNode;
