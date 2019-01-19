"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const chai_1 = require("chai");
const rules_1 = require("../../src/rules");
function findIssues(abap) {
    const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zfoobar.prog.abap", abap)).parse();
    const rule = new rules_1.MixReturning();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: local variable names", function () {
    it("parser error", function () {
        const abap = "sdf lksjdf lkj sdf";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("ok", function () {
        const abap = "CLASS zcl_abapgit_object_enho_class DEFINITION.\n" +
            "PUBLIC SECTION.\n" +
            "  METHODS:\n" +
            "   foobar.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("ok", function () {
        const abap = "CLASS zcl_abapgit_object_enho_class DEFINITION.\n" +
            "PUBLIC SECTION.\n" +
            "  METHODS:\n" +
            "   foobar RETURNING VALUE(rv_string) TYPE string.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(0);
    });
    it("issue", function () {
        const abap = "CLASS zcl_abapgit_object_enho_class DEFINITION.\n" +
            "PUBLIC SECTION.\n" +
            "  METHODS:\n" +
            "   foobar EXPORTING foo TYPE i RETURNING VALUE(rv_string) TYPE string.\n" +
            "ENDCLASS.";
        const issues = findIssues(abap);
        chai_1.expect(issues.length).to.equal(1);
    });
});
