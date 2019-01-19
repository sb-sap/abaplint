"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _combi_1 = require("./_combi");
const _structure_1 = require("./_structure");
const class_section_1 = require("./class_section");
class Interface extends _structure_1.Structure {
    getMatcher() {
        const intf = _combi_1.beginEnd(_combi_1.sta(Statements.Interface), _combi_1.star(_combi_1.sub(new class_section_1.SectionContents())), _combi_1.sta(Statements.EndInterface));
        return _combi_1.seq(_combi_1.star(_combi_1.sta(Statements.TypePools)), _combi_1.star(_combi_1.sta(Statements.InterfaceLoad)), intf);
    }
}
exports.Interface = Interface;
