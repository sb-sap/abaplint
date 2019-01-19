"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../../src/registry");
const files_1 = require("../../../src/files");
function runProgram(abap) {
    const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoobar.prog.abap", abap)).parse();
    const file = reg.getABAPFiles()[0];
    return file.getFormDefinitions();
}
describe("Types, FormDefinition", () => {
    it("negative, parser error", () => {
        const defs = runProgram("moo boo");
        chai_1.expect(defs.length).to.equal(0);
    });
    it("one FORM, no parameters", () => {
        const abap = "FORM moo.\nENDFORM.\n";
        const defs = runProgram(abap);
        chai_1.expect(defs.length).to.equal(1);
        chai_1.expect(defs[0].getParameters().length).to.equal(0);
    });
    it("two FORMs", () => {
        const abap = "FORM moo.\nENDFORM.\nFORM boo.\nENDFORM.\n";
        const defs = runProgram(abap);
        chai_1.expect(defs.length).to.equal(2);
    });
    it("one FORM, one parameter", () => {
        const abap = "FORM moo USING blah.\nENDFORM.\n";
        const defs = runProgram(abap);
        chai_1.expect(defs.length).to.equal(1);
        const params = defs[0].getParameters();
        chai_1.expect(params.length).to.equal(1);
        chai_1.expect(params[0].getName()).to.equal("blah");
    });
});
