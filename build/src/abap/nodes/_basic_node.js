"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicNode {
    constructor() {
        this.children = [];
    }
    addChild(n) {
        this.children.push(n);
        return this;
    }
    setChildren(children) {
        this.children = children;
        return this;
    }
    getChildren() {
        return this.children;
    }
    getFirstChild() {
        return this.children[0];
    }
    getLastChild() {
        return this.children[this.children.length - 1];
    }
}
exports.BasicNode = BasicNode;
