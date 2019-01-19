"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const files_1 = require("../../src/files");
const registry_1 = require("../../src/registry");
const symbols_1 = require("../../src/lsp/symbols");
describe("LSP, symbols", () => {
    it("Simple WRITE, no symbols", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "WRITE foo.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const symbols = symbols_1.Symbols.find(reg, file.getFilename());
        chai_1.expect(symbols.length).to.equal(0);
    });
    it("Class Definition", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "CLASS lcl_foobar DEFINITION.\nENDCLASS.");
        const reg = new registry_1.Registry().addFile(file).parse();
        chai_1.expect(reg.findIssues().length).to.equal(0);
        const symbols = symbols_1.Symbols.find(reg, file.getFilename());
        chai_1.expect(symbols.length).to.equal(1);
        chai_1.expect(symbols[0].name).to.equal("lcl_foobar");
    });
    it("Class Implementation", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "CLASS lcl_foobar IMPLEMENTATION.\nENDCLASS.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const symbols = symbols_1.Symbols.find(reg, file.getFilename());
        chai_1.expect(symbols.length).to.equal(1);
        chai_1.expect(symbols[0].name).to.equal("lcl_foobar");
    });
    it("Class Implementation, with method", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "CLASS lcl_foobar IMPLEMENTATION.\nMETHOD foo.\nENDMETHOD.\nENDCLASS.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const symbols = symbols_1.Symbols.find(reg, file.getFilename());
        chai_1.expect(symbols.length).to.equal(1);
        chai_1.expect(symbols[0].name).to.equal("lcl_foobar");
        chai_1.expect(symbols[0].children).to.not.equal(undefined);
        chai_1.expect(symbols[0].children.length).to.equal(1);
        chai_1.expect(symbols[0].children[0].name).to.equal("foo");
    });
    it("FORM Definition", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "FORM foobar.\nENDFORM.");
        const reg = new registry_1.Registry().addFile(file).parse();
        chai_1.expect(reg.findIssues().length).to.equal(0);
        const symbols = symbols_1.Symbols.find(reg, file.getFilename());
        chai_1.expect(symbols.length).to.equal(1);
        chai_1.expect(symbols[0].name).to.equal("foobar");
    });
});
