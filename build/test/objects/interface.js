"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../src/registry");
const memory_file_1 = require("../../src/files/memory_file");
const scope_1 = require("../../src/abap/types/scope");
// todo, most(all?) of these tests to be moved to abap/types/
describe("Objects, interface, getMethodDefinitions", () => {
    it("test, positive", () => {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1.\n" +
            "ENDINTERFACE.";
        const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zif_foobar.intf.abap", abap)).parse();
        const intf = reg.getABAPObjects()[0];
        const def = intf.getDefinition();
        chai_1.expect(def).to.not.equal(undefined);
        chai_1.expect(def.getMethodDefinitions().length).to.equal(1);
        chai_1.expect(def.getMethodDefinitions()[0].getName()).to.equal("method1");
        chai_1.expect(def.getMethodDefinitions()[0].getScope()).to.equal(scope_1.Scope.Public);
    });
    it("test, parser error", () => {
        const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zif_foobar.intf.abap", "parser error")).parse();
        const intf = reg.getABAPObjects()[0];
        chai_1.expect(intf.getDefinition()).to.equal(undefined);
    });
});
describe("Objects, interface, getMethodParameters", () => {
    it("test, positive", () => {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 IMPORTING foo TYPE i.\n" +
            "ENDINTERFACE.";
        const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zif_foobar.intf.abap", abap)).parse();
        const intf = reg.getABAPObjects()[0];
        chai_1.expect(intf.getDefinition().getMethodDefinitions().length).to.equal(1);
        chai_1.expect(intf.getDefinition().getMethodDefinitions()[0].getParameters().getImporting().length).to.equal(1);
        chai_1.expect(intf.getDefinition().getMethodDefinitions()[0].getParameters().getImporting()[0].getName()).to.equal("foo");
    });
    it("test, returning", () => {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 RETURNING VALUE(rv_foo) TYPE i.\n" +
            "ENDINTERFACE.";
        const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zif_foobar.intf.abap", abap)).parse();
        const intf = reg.getABAPObjects()[0];
        chai_1.expect(intf.getDefinition().getMethodDefinitions().length).to.equal(1);
        const returning = intf.getDefinition().getMethodDefinitions()[0].getParameters().getReturning();
        chai_1.expect(returning).to.not.equal(undefined);
        if (returning) {
            chai_1.expect(returning.getName()).to.equal("rv_foo");
        }
    });
});
