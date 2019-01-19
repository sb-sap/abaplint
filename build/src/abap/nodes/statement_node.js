"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _basic_node_1 = require("./_basic_node");
const position_1 = require("../../position");
const pragma_1 = require("../tokens/pragma");
const token_node_1 = require("./token_node");
const expression_node_1 = require("./expression_node");
class StatementNode extends _basic_node_1.BasicNode {
    constructor(statement) {
        super();
        this.statement = statement;
    }
    get() {
        return this.statement;
    }
    setChildren(children) {
        if (children.length === 0) {
            throw "statement: zero children";
        }
        // commented to optimize performance
        /*
            // validate child nodes
            children.forEach((c) => {
              if (!(c instanceof TokenNode || c instanceof ExpressionNode)) {
                throw "statement: not token or expression node";
              }
            });
        */
        this.children = children;
        return this;
    }
    getStart() {
        return this.getTokens()[0].getPos();
    }
    getEnd() {
        const tokens = this.getTokens();
        const last = tokens[tokens.length - 1];
        const pos = new position_1.Position(last.getPos().getRow(), last.getPos().getCol() + last.getStr().length);
        return pos;
    }
    getTokens() {
        let tokens = [];
        this.getChildren().forEach((c) => {
            tokens = tokens.concat(this.toTokens(c));
        });
        return tokens;
    }
    concatTokens() {
        let str = "";
        let prev;
        for (const token of this.getTokens()) {
            if (token instanceof pragma_1.Pragma) {
                continue;
            }
            if (str === "") {
                str = token.getStr();
            }
            else if (prev && prev.getStr().length + prev.getCol() === token.getCol()
                && prev.getRow() === token.getRow()) {
                str = str + token.getStr();
            }
            else {
                str = str + " " + token.getStr();
            }
            prev = token;
        }
        return str;
    }
    getTerminator() {
        return this.getTokens()[this.getTokens().length - 1].getStr();
    }
    getFirstToken() {
        for (const child of this.getChildren()) {
            if (child instanceof token_node_1.TokenNode) {
                return child.get();
            }
            else if (child instanceof expression_node_1.ExpressionNode) {
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
        else if (child instanceof expression_node_1.ExpressionNode) {
            return child.getLastToken();
        }
        throw new Error("getLastToken, unexpected type");
    }
    findFirstExpression(type) {
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                return child;
            }
            else if (child instanceof token_node_1.TokenNode) {
                continue;
            }
            else if (child instanceof expression_node_1.ExpressionNode) {
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
    findAllExpressions(type) {
        let ret = [];
        for (const child of this.getChildren()) {
            if (child.get() instanceof type) {
                ret.push(child);
            }
            else if (child instanceof token_node_1.TokenNode) {
                continue;
            }
            else if (child instanceof expression_node_1.ExpressionNode) {
                ret = ret.concat(child.findAllExpressions(type));
            }
            else {
                throw new Error("findAllExpressions, unexpected type");
            }
        }
        return ret;
    }
    toTokens(b) {
        let tokens = [];
        if (b instanceof token_node_1.TokenNode) {
            tokens.push(b.get());
        }
        b.getChildren().forEach((c) => {
            if (c instanceof token_node_1.TokenNode) {
                tokens.push(c.get());
            }
            else {
                tokens = tokens.concat(this.toTokens(c));
            }
        });
        return tokens;
    }
}
exports.StatementNode = StatementNode;
