"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const files_1 = require("../../../src/files");
const registry_1 = require("../../../src/registry");
describe("Types, class_definition", () => {
    it("isFinal, negative", () => {
        const abap = "CLASS zcl_moo DEFINITION PUBLIC CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS zcl_moo IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zcl_moo.clas.abap", abap)).parse();
        const clas = reg.getABAPObjects()[0];
        chai_1.expect(clas.getClassDefinition()).to.not.equal(undefined);
        chai_1.expect(clas.getClassDefinition().isFinal()).to.equal(false);
    });
    it("isFinal, positive", () => {
        const abap = "CLASS zcl_moo DEFINITION PUBLIC FINAL CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS zcl_moo IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zcl_moo.clas.abap", abap)).parse();
        const clas = reg.getABAPObjects()[0];
        chai_1.expect(clas.getClassDefinition()).to.not.equal(undefined);
        chai_1.expect(clas.getClassDefinition().isFinal()).to.equal(true);
    });
});
