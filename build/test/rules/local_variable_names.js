"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const chai_1 = require("chai");
const rules_1 = require("../../src/rules");
function findIssues(abap) {
    const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zfoobar.prog.abap", abap)).parse();
    const rule = new rules_1.LocalVariableNames();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: local variable names", function () {
    it("parser error", function () {
        const abap = "sdf lksjdf lkj sdf";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("ok", function () {
        const abap = "FORM foobar. DATA lv_moo TYPE i. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("issue, FORM", function () {
        const abap = "FORM foobar. DATA moo TYPE i. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("issue, METHOD", function () {
        const abap = "CLASS foo IMPLEMENTATION. METHOD foobar. DATA moo TYPE i. ENDMETHOD. ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("issue, Function Module", function () {
        const abap = "FUNCTION foo. DATA moo TYPE i. ENDFUNCTION.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("issue, FORM, fieldsymbol", function () {
        const abap = "FORM foobar. FIELD-SYMBOL <moo> TYPE i. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("ok, FORM, fieldsymbol", function () {
        const abap = "FORM foobar. FIELD-SYMBOL <lv_moo> TYPE i. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("ok, FORM, DATA BEGIN OF", function () {
        const abap = "FORM foobar. DATA: BEGIN OF ls_foo, moob TYPE i, END OF ls_foo. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("issue, FORM, DATA BEGIN OF", function () {
        const abap = "FORM foobar. DATA: BEGIN OF foo, moob TYPE i, END OF foo. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("issue, local constant", function () {
        const abap = "FORM foobar. CONSTANTS foo TYPE c VALUE 'A' LENGTH 1. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
    it("ok, local constant", function () {
        const abap = "FORM foobar. CONSTANTS lc_foo TYPE c VALUE 'A' LENGTH 1. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("ok, local constant structure", function () {
        const abap = "FORM foobar. CONSTANTS: BEGIN OF lc_parameter_type,\n" +
            "import TYPE vepparamtype VALUE 'I',\n" +
            "export TYPE vepparamtype VALUE 'O',\n" +
            "END OF lc_parameter_type. ENDFORM.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
});
