"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const chai_1 = require("chai");
const try_without_catch_1 = require("../../src/rules/try_without_catch");
function findIssues(abap) {
    const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zfoo.prog.abap", abap)).parse();
    const rule = new try_without_catch_1.TryWithoutCatch();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: try without catch", function () {
    it("no issues", function () {
        chai_1.expect(findIssues("WRITE foo.").length).to.equal(0);
    });
    it("issue", function () {
        chai_1.expect(findIssues("TRY. ENDTRY.").length).to.equal(1);
    });
    it("fixed", function () {
        chai_1.expect(findIssues("TRY. CATCH zcx_moo. ENDTRY.").length).to.equal(0);
    });
    it("parser error", function () {
        chai_1.expect(findIssues("kjlsfklsdfj sdf").length).to.equal(0);
    });
});
