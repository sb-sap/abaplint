"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _structure_1 = require("./_structure");
const Statements = require("../statements");
const _combi_1 = require("./_combi");
const class_section_1 = require("./class_section");
class PrivateSection extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.seq(_combi_1.sta(Statements.Private), _combi_1.opt(_combi_1.sub(new class_section_1.SectionContents())));
    }
}
exports.PrivateSection = PrivateSection;
