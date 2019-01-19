"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const Structures = require("./");
const _combi_1 = require("./_combi");
class ClassImplementation extends _structure_1.Structure {
    getMatcher() {
        /*
        let method = beginEnd(sta(Statements.Method),
                              star(sub(new Structures.Normal())),
                              sta(Statements.Endmethod));
                              */
        // the DEFINE statement is allowed between local method implementations, but not global?
        const body = _combi_1.star(_combi_1.alt(_combi_1.sub(new Structures.Define()), _combi_1.sub(new Structures.Method())));
        return _combi_1.beginEnd(_combi_1.sta(Statements.ClassImplementation), body, _combi_1.sta(Statements.EndClass));
    }
}
exports.ClassImplementation = ClassImplementation;
