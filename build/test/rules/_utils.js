"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../src/registry");
const memory_file_1 = require("../../src/files/memory_file");
function testRule(tests, rule) {
    const nrule = new rule();
    describe("test " + nrule.getKey() + " rule", function () {
        // note that timeout() only works inside function()
        this.timeout(200); // tslint:disable-line
        tests.forEach((test) => {
            const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("cl_foo.prog.abap", test.abap)).parse();
            const issues = nrule.run(reg.getObjects()[0], reg);
            it("\"" + test.abap + "\" should have " + test.cnt + " issue(s)", () => {
                chai_1.expect(issues.length).to.equals(test.cnt);
            });
        });
    });
}
exports.testRule = testRule;
