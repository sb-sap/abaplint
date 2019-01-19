"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const method_parameter_names_1 = require("../../src/rules/method_parameter_names");
const chai_1 = require("chai");
function findIssues(abap, filename) {
    const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile(filename, abap)).parse();
    const rule = new method_parameter_names_1.MethodParameterNames();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: method parameter names", function () {
    it("positive 1", function () {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 IMPORTING foo TYPE i.\n" +
            "ENDINTERFACE.";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(1);
    });
    it("negative, 1", function () {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 IMPORTING !iv_foo TYPE i.\n" +
            "ENDINTERFACE.";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("negative", function () {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 IMPORTING iv_foo TYPE i.\n" +
            "ENDINTERFACE.";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("no methods, interface", function () {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "ENDINTERFACE.";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("no methods, class", function () {
        const abap = "CLASS zcl_foobar PUBLIC.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap, "zif_foobar.clas.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("parser error, class", function () {
        const abap = "sdfsd sdf sdfsd fd";
        const issues = findIssues(abap, "zif_foobar.clas.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("parser error, interface", function () {
        const abap = "sdfsd sdf sdfsd fd";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("skip exception", function () {
        const abap = "CLASS zcx_abapgit_exception DEFINITION\n" +
            "PUBLIC\n" +
            "INHERITING FROM cx_static_check\n" +
            "CREATE PUBLIC.\n" +
            "PUBLIC SECTION.\n" +
            "METHODS constructor IMPORTING foo TYPE C OPTIONAL.\n" +
            "ENDCLASS.\n" +
            "CLASS zcx_abapgit_exception IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap, "zcx_abapgit_exception.clas.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("skip p_task", function () {
        const abap = "INTERFACE zif_foobar PUBLIC.\n" +
            "  METHODS method1 IMPORTING p_task TYPE i.\n" +
            "ENDINTERFACE.";
        const issues = findIssues(abap, "zif_foobar.intf.abap");
        chai_1.expect(issues.length).to.equal(0);
    });
    it("positive, instance method", function () {
        const abap = "CLASS lcl_foobar DEFINITION.\n" +
            "  PUBLIC SECTION.\n" +
            "    METHODS method1 IMPORTING foo TYPE i.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap, "foobar.prog.abap");
        chai_1.expect(issues.length).to.equal(1);
    });
    it("positive, static method", function () {
        const abap = "CLASS lcl_foobar DEFINITION.\n" +
            "  PUBLIC SECTION.\n" +
            "    CLASS-METHODS method1 IMPORTING foo TYPE i.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap, "foobar.prog.abap");
        chai_1.expect(issues.length).to.equal(1);
    });
});
