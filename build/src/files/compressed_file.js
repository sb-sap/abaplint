"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_file_1 = require("./_abstract_file");
const zlib = require("zlib");
class CompressedFile extends _abstract_file_1.AbstractFile {
    constructor(filename, compressed) {
        super(filename);
        this.compressed = compressed;
    }
    getRaw() {
        return this.decompress(this.compressed);
    }
    getRawRows() {
        return this.decompress(this.compressed).split("\n");
    }
    decompress(compressed) {
        return zlib.inflateSync(Buffer.from(compressed, "base64")).toString("utf8");
    }
}
exports.CompressedFile = CompressedFile;
