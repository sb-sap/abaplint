"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules = require("./rules/");
const Objects = require("./objects");
class Artifacts {
    static getRules() {
        const ret = [];
        for (const key in Rules) {
            const list = Rules;
            if (typeof list[key] === "function") {
                const rule = new list[key]();
                // note that configuration is also exported from rules
                if (rule.getKey) {
                    ret.push(rule);
                }
            }
        }
        return ret;
    }
    static newObject(name, type) {
        if (this.objectMap === undefined) {
            this.buildObjectMap();
        }
        if (type === "ABAP") {
            throw new Error("Add type in filename, eg zclass.clas.abap or zprogram.prog.abap");
        }
        else if (this.objectMap[type] === undefined) {
            throw new Error("Unknown object type: " + type);
        }
        return new this.objectMap[type](name);
    }
    /*
      public static getFormatters(): undefined {
    // todo
        return undefined;
      }
    */
    static buildObjectMap() {
        this.objectMap = [];
        for (const key in Objects) {
            const list = Objects;
            if (typeof list[key] === "function") {
                const obj = new list[key]("ASDF");
                this.objectMap[obj.getType()] = list[key];
            }
        }
    }
}
exports.Artifacts = Artifacts;
