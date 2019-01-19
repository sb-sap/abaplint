"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    getCol() {
        return this.col;
    }
    getRow() {
        return this.row;
    }
}
exports.Position = Position;
