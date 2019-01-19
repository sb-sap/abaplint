"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractFile {
    constructor(filename) {
        this.filename = filename;
    }
    getFilename() {
        return this.filename;
    }
    getObjectType() {
        const base = this.getFilename().split("/").reverse()[0];
        const split = base.split(".");
        return split[1].toUpperCase();
    }
    getObjectName() {
        const base = this.getFilename().split("/").reverse()[0];
        const split = base.split(".");
        return split[0].toUpperCase().replace(/#/g, "/");
    }
}
exports.AbstractFile = AbstractFile;
