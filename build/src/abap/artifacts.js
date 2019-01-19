"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("./statements");
const Expressions = require("./expressions");
const Structures = require("./structures");
const combi_1 = require("./combi");
class List {
    constructor() {
        this.words = [];
    }
    add(keywords, source) {
        for (const w of keywords) {
            const index = this.find(w);
            if (index >= 0) {
                this.words[index].source.push(source);
            }
            else {
                this.words.push({ word: w, source: [source] });
            }
        }
    }
    get() {
        return this.words;
    }
    find(keyword) {
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].word === keyword) {
                return i;
            }
        }
        return -1;
    }
}
function className(cla) {
    // @ts-ignore
    return (cla.constructor + "").match(/\w+/g)[1];
}
class Artifacts {
    static getStructures() {
        const ret = [];
        for (const key in Structures) {
            const list = Structures;
            if (typeof list[key] === "function") {
                ret.push(new list[key]());
            }
        }
        return ret;
    }
    static getExpressions() {
        const ret = [];
        for (const key in Expressions) {
            const list = Expressions;
            if (typeof list[key] === "function") {
                ret.push(new list[key]());
            }
        }
        return ret;
    }
    static getStatements() {
        const ret = [];
        for (const key in Statements) {
            const list = Statements;
            if (typeof list[key] === "function") {
                ret.push(new list[key]());
            }
        }
        return ret;
    }
    static getKeywords() {
        const list = new List();
        for (const stat of this.getStatements()) {
            list.add(combi_1.Combi.listKeywords(stat.getMatcher()), "statement_" + className(stat));
        }
        for (const expr of this.getExpressions()) {
            list.add(combi_1.Combi.listKeywords(expr.getRunnable()), "expression_" + className(expr));
        }
        return list.get();
    }
}
exports.Artifacts = Artifacts;
