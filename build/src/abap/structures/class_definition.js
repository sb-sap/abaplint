"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _combi_1 = require("./_combi");
const _structure_1 = require("./_structure");
const private_section_1 = require("./private_section");
const protected_section_1 = require("./protected_section");
const public_section_1 = require("./public_section");
class ClassDefinition extends _structure_1.Structure {
    getMatcher() {
        const body = _combi_1.seq(_combi_1.opt(_combi_1.sub(new public_section_1.PublicSection())), _combi_1.opt(_combi_1.sub(new protected_section_1.ProtectedSection())), _combi_1.opt(_combi_1.sub(new private_section_1.PrivateSection())));
        return _combi_1.beginEnd(_combi_1.sta(Statements.ClassDefinition), body, _combi_1.sta(Statements.EndClass));
    }
}
exports.ClassDefinition = ClassDefinition;
