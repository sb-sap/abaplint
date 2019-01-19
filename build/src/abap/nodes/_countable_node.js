"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _basic_node_1 = require("./_basic_node");
// todo, delete this class, to be implemented elsewhere
class CountableNode extends _basic_node_1.BasicNode {
    countTokens() {
        const count = this.getChildren().reduce((a, b) => { return a + b.countTokens(); }, 0);
        return count;
    }
}
exports.CountableNode = CountableNode;
