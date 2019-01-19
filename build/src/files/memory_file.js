"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_file_1 = require("./_abstract_file");
class MemoryFile extends _abstract_file_1.AbstractFile {
    constructor(filename, raw) {
        super(filename);
        this.raw = raw;
    }
    getRaw() {
        return this.raw;
    }
    getRawRows() {
        return this.raw.split("\n");
    }
}
exports.MemoryFile = MemoryFile;
