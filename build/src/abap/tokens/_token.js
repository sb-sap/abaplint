"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo, should this be an interface instead?
class Token {
    constructor(pos, str) {
        this.pos = pos;
        this.str = str;
    }
    getStr() {
        return this.str;
    }
    getRow() {
        return this.pos.getRow();
    }
    getCol() {
        return this.pos.getCol();
    }
    // todo, rename to getPosition to align across?
    getPos() {
        return this.pos;
    }
}
exports.Token = Token;
