"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = require("./position");
class Issue {
    constructor(data) {
        this.message = data.message;
        this.key = data.key;
        if (!data.start) {
            this.start = new position_1.Position(1, 1);
        }
        else {
            this.start = data.start;
        }
        if (!data.end) {
            this.end = new position_1.Position(this.start.getRow(), data.file.getRawRows()[this.start.getRow() - 1].length);
        }
        this.file = data.file;
    }
    getMessage() {
        return this.message;
    }
    getKey() {
        return this.key;
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getFile() {
        return this.file;
    }
}
exports.Issue = Issue;
