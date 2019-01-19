"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _countable_node_1 = require("./_countable_node");
class TokenNode extends _countable_node_1.CountableNode {
    constructor(token) {
        super();
        this.token = token;
    }
    get() {
        return this.token;
    }
    countTokens() {
        return super.countTokens() + 1;
    }
    getFirstToken() {
        return this.token;
    }
    getLastToken() {
        return this.token;
    }
}
exports.TokenNode = TokenNode;
class TokenNodeRegex extends TokenNode {
}
exports.TokenNodeRegex = TokenNodeRegex;
