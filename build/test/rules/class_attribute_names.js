"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const chai_1 = require("chai");
const class_attribute_names_1 = require("../../src/rules/class_attribute_names");
function findIssues(abap) {
    const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("cl_foobar.clas.abap", abap)).parse();
    const rule = new class_attribute_names_1.ClassAttributeNames();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: class attribute names", function () {
    it("parser error", function () {
        const abap = "sdf lksjdf lkj sdf";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("issue", function () {
        const abap = "CLASS zcl_foobar DEFINITION PUBLIC.\n" +
            "  PUBLIC SECTION. DATA foo TYPE i.\n" +
            "ENDCLASS. CLASS zcl_foobar IMPLEMENTATION. ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("no issue", function () {
        const abap = "CLASS zcl_foobar DEFINITION PUBLIC.\n" +
            "  PUBLIC SECTION. DATA mv_foo TYPE i.\n" +
            "ENDCLASS. CLASS zcl_foobar IMPLEMENTATION. ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("issue", function () {
        const abap = "CLASS zcl_foobar DEFINITION PUBLIC.\n" +
            "  PUBLIC SECTION. CLASS-DATA foo TYPE i.\n" +
            "ENDCLASS. CLASS zcl_foobar IMPLEMENTATION. ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
});
