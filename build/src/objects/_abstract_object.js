"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractObject {
    constructor(name) {
        this.name = name;
        this.files = [];
        this.dirty = false;
    }
    getName() {
        return this.name;
    }
    setDirty() {
        this.dirty = true;
    }
    addFile(file) {
        this.setDirty();
        this.files.push(file);
    }
    getFiles() {
        return this.files;
    }
    removeFile(file) {
        this.setDirty();
        for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].getFilename() === file.getFilename()) {
                this.files.splice(i, 1);
                return;
            }
        }
        throw new Error("removeFile: file not found");
    }
    isDirty() {
        return this.dirty;
    }
    updateFile(file) {
        this.setDirty();
        for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].getFilename() === file.getFilename()) {
                this.files[i] = file;
                return;
            }
        }
        throw new Error("updateFile: file not found");
    }
}
exports.AbstractObject = AbstractObject;
