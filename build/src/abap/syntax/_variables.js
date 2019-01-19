"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Variables {
    constructor() {
        this.scopes = [];
        this.pushScope("_global");
    }
    add(identifier) {
        this.scopes[this.scopes.length - 1].ids.push(identifier);
    }
    addOther(name) {
        this.scopes[this.scopes.length - 1].other.push(name);
    }
    addList(identifiers) {
        for (const id of identifiers) {
            this.add(id);
        }
    }
    getCurrentScope() {
        return this.scopes[this.scopes.length - 1].ids;
    }
    resolve(name) {
        // todo, this should probably search the nearest first? in case there are shadowed variables?
        for (const scope of this.scopes) {
            for (const local of scope.ids) {
                if (local.getName().toUpperCase() === name.toUpperCase()) {
                    return local;
                }
            }
            for (const local of scope.other) {
                if (local.toUpperCase() === name.toUpperCase()) {
                    return local;
                }
            }
        }
        return undefined;
    }
    getParentName() {
        return this.scopes[this.scopes.length - 2].name;
    }
    pushScope(name) {
        this.scopes.push({ name: name, ids: [], other: [] });
        return this;
    }
    popScope() {
        this.scopes.pop();
        if (this.scopes.length === 0) {
            throw new Error("something wrong, global scope popped");
        }
    }
}
exports.Variables = Variables;
