"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Identifier {
    constructor(token, node) {
        this.name = token.getStr();
        this.position = token.getPos();
        this.start = node.getFirstToken().getPos();
        this.end = node.getLastToken().getPos();
        // todo, should this be handled in the parser instead?
        if (this.name.substr(0, 1) === "!") {
            this.name = this.name.substr(1);
        }
    }
    getName() {
        return this.name;
    }
    getPosition() {
        return this.position;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
}
exports.Identifier = Identifier;
