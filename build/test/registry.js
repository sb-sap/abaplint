"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("../src/registry");
const files_1 = require("../src/files");
const chai_1 = require("chai");
describe("Registry", () => {
    it("Parse ABAP file", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "IF moo = boo. ENDIF.");
        const abap = new registry_1.Registry().addFile(file).parse().getABAPFiles();
        chai_1.expect(abap.length).to.equal(1);
        chai_1.expect(abap[0].getStatements().length).to.equal(2);
        chai_1.expect(abap[0].getStructure()).to.not.equal(undefined);
    });
    it("Add and update file", () => {
        const first = new files_1.MemoryFile("zfoobar.prog.abap", "first");
        const registry = new registry_1.Registry().addFile(first);
        chai_1.expect(registry.getABAPFiles().length).to.equal(1);
        chai_1.expect(registry.getObjects().length).to.equal(1);
        const updated = new files_1.MemoryFile("zfoobar.prog.abap", "updated");
        registry.updateFile(updated);
        chai_1.expect(registry.getABAPFiles().length).to.equal(1);
        chai_1.expect(registry.getObjects().length).to.equal(1);
        chai_1.expect(registry.getABAPFiles()[0].getRaw()).to.equal("updated");
    });
    it("filename with namespace", () => {
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("#namesp#cl_foobar.clas.abap", "parser error"));
        chai_1.expect(reg.getObjects().length).to.equal(1);
        chai_1.expect(reg.getObjects()[0].getType()).to.equal("CLAS");
        chai_1.expect(reg.getObject("CLAS", "/namesp/cl_foobar")).to.not.equal(undefined);
    });
    it("Update unknown file, 1", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "IF moo = boo. ENDIF.");
        const registry = new registry_1.Registry();
        chai_1.expect(() => { registry.updateFile(file); }).to.throw("find: object not found");
    });
    it("Update unknown file, 2", () => {
        const file = new files_1.MemoryFile("zfoobar.clas.abap", "WRITE hello.");
        const registry = new registry_1.Registry().addFile(file);
        const update = new files_1.MemoryFile("zfoobar.clas.testclasses.abap", "WRITE hello..");
        chai_1.expect(() => { registry.updateFile(update); }).to.throw("updateFile: file not found");
    });
    it("Remove files", () => {
        const file1 = new files_1.MemoryFile("zfoobar.clas.abap", "WRITE hello.");
        const file2 = new files_1.MemoryFile("zfoobar.clas.testclasses.abap", "WRITE hello..");
        const registry = new registry_1.Registry().addFiles([file1, file2]);
        chai_1.expect(registry.getABAPObjects().length).to.equal(1);
        chai_1.expect(registry.getABAPObjects()[0].getFiles().length).to.equal(2);
        registry.removeFile(file1);
        chai_1.expect(registry.getABAPObjects().length).to.equal(1);
        chai_1.expect(registry.getABAPObjects()[0].getFiles().length).to.equal(1);
        chai_1.expect(registry.getABAPObjects()[0].getFiles()[0].getFilename()).to.equal("zfoobar.clas.testclasses.abap");
        registry.removeFile(file2);
        chai_1.expect(registry.getABAPObjects().length).to.equal(0);
        chai_1.expect(() => { registry.removeFile(file1); }).to.throw();
    });
    it("Add and update", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "DATA hello.\nWRITE hello.");
        const registry = new registry_1.Registry().addFile(file);
        chai_1.expect(registry.findIssues().length).to.equal(0);
        const updated = new files_1.MemoryFile("zfoobar.prog.abap", "moo boo");
        registry.updateFile(updated);
        chai_1.expect(registry.findIssues().length).to.equal(1);
    });
    it("Double parse should give the same issues, structure", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "IF foo = bar.");
        const registry = new registry_1.Registry().addFile(file);
        chai_1.expect(registry.findIssues().length).to.equal(1);
        chai_1.expect(registry.findIssues().length).to.equal(1);
    });
    it("Double parse should give the same issues, parser errror", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "moo boo");
        const registry = new registry_1.Registry().addFile(file);
        chai_1.expect(registry.findIssues().length).to.equal(1);
        chai_1.expect(registry.findIssues().length).to.equal(1);
    });
    it("Double parse should give the same issues, rule", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "BREAK-POINT.");
        const registry = new registry_1.Registry().addFile(file);
        chai_1.expect(registry.findIssues().length).to.equal(1);
        chai_1.expect(registry.findIssues().length).to.equal(1);
    });
    it("find issues for file", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "BREAK-POINT.");
        const registry = new registry_1.Registry().addFile(file);
        chai_1.expect(registry.findIssuesFile(file).length).to.equal(1);
    });
    it("find issues for unknown file", () => {
        const file = new files_1.MemoryFile("zfoobar.prog.abap", "BREAK-POINT.");
        const registry = new registry_1.Registry();
        chai_1.expect(registry.findIssuesFile(file).length).to.equal(0);
    });
});
