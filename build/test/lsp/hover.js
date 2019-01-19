"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const files_1 = require("../../src/files");
const registry_1 = require("../../src/registry");
const hover_1 = require("../../src/lsp/hover");
describe("LSP, hover", () => {
    it("first character = DO", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "DO.");
        const reg = new registry_1.Registry().addFile(file).parse();
        let hover = undefined;
        for (let i = 0; i < 2; i++) {
            hover = hover_1.Hover.find(reg, file.getFilename(), 0, i);
            chai_1.expect(hover).to.not.equal(undefined);
            chai_1.expect(hover.value).to.contain("```abap\nDO\n```\nStatement: Do\n\nToken: Identifier");
        }
        hover = hover_1.Hover.find(reg, file.getFilename(), 0, 2);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("```abap\n.\n```\nStatement: Do\n\nToken: Punctuation");
        hover = hover_1.Hover.find(reg, file.getFilename(), 1, 0);
        chai_1.expect(hover).to.equal(undefined);
        hover = hover_1.Hover.find(reg, file.getFilename(), 0, 3);
        chai_1.expect(hover).to.equal(undefined);
    });
    it("full structure", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "DO. ENDDO.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover = hover_1.Hover.find(reg, file.getFilename(), 0, 0);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("Structure: Any");
    });
    it("full structure, 2nd token", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "WRITE hello.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover = hover_1.Hover.find(reg, file.getFilename(), 0, 7);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("hello");
        chai_1.expect(hover.value).to.contain("Structure: Any");
    });
    it("two tokens with same string", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "DATA(foobar) = 2.\nWRITE foobar.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover1 = hover_1.Hover.find(reg, file.getFilename(), 0, 7);
        const hover2 = hover_1.Hover.find(reg, file.getFilename(), 1, 7);
        chai_1.expect(hover1).to.not.equal(undefined);
        chai_1.expect(hover2).to.not.equal(undefined);
        chai_1.expect(hover1.value).to.contain("InlineData");
        chai_1.expect(hover2.value).to.not.contain("InlineData");
    });
    it("not resolved", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "WRITE foobar.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover = hover_1.Hover.find(reg, file.getFilename(), 0, 7);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("Not resolved");
    });
    it("resolved, local", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "DATA(foobar) = 2.\nWRITE foobar.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover = hover_1.Hover.find(reg, file.getFilename(), 1, 7);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("Resolved");
    });
    it("Is keyword", () => {
        const file = new files_1.MemoryFile("foobar.prog.abap", "WRITE foobar.");
        const reg = new registry_1.Registry().addFile(file).parse();
        const hover = hover_1.Hover.find(reg, file.getFilename(), 0, 2);
        chai_1.expect(hover).to.not.equal(undefined);
        chai_1.expect(hover.value).to.contain("Is a ABAP keyword");
    });
});
