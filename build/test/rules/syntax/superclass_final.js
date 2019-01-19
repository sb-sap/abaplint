"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rules_1 = require("../../../src/rules");
const registry_1 = require("../../../src/registry");
const files_1 = require("../../../src/files");
function runMulti(files) {
    const reg = new registry_1.Registry();
    for (const file of files) {
        reg.addFile(new files_1.MemoryFile(file.filename, file.contents));
    }
    reg.parse();
    let issues = [];
    for (const obj of reg.getObjects()) {
        issues = issues.concat(new rules_1.SuperclassFinal().run(obj, reg));
    }
    return issues;
}
describe("Rules, superclass final rule", function () {
    it("parser error", () => {
        const issues = runMulti([{ filename: "cl_foo.clas.abap", contents: "parase error" }]);
        chai_1.expect(issues.length).to.equals(0);
    });
    it("normal class", () => {
        const contents = "CLASS zcl_foobar DEFINITION PUBLIC FINAL CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS zcl_foobar IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const issues = runMulti([{ filename: "cl_foo.clas.abap", contents }]);
        chai_1.expect(issues.length).to.equals(0);
    });
    it("superclass final", () => {
        const clas = "CLASS zcl_foobar DEFINITION PUBLIC INHERITING FROM zcl_super FINAL CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS zcl_foobar IMPLEMENTATION.\n" +
            "ENDCLASS.\n";
        const sup = "CLASS zcl_super DEFINITION PUBLIC FINAL CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS ZCL_SUPER IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const issues = runMulti([
            { filename: "zcl_foobar.clas.abap", contents: clas },
            { filename: "zcl_super.clas.abap", contents: sup }
        ]);
        chai_1.expect(issues.length).to.equals(1);
    });
    it("superclass not final", () => {
        const clas = "CLASS zcl_foobar DEFINITION PUBLIC INHERITING FROM zcl_super FINAL CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS zcl_foobar IMPLEMENTATION.\n" +
            "ENDCLASS.\n";
        const sup = "CLASS zcl_super DEFINITION PUBLIC CREATE PUBLIC.\n" +
            "ENDCLASS.\n" +
            "CLASS ZCL_SUPER IMPLEMENTATION.\n" +
            "ENDCLASS.";
        const issues = runMulti([
            { filename: "zcl_foobar.clas.abap", contents: clas },
            { filename: "zcl_super.clas.abap", contents: sup }
        ]);
        chai_1.expect(issues.length).to.equals(0);
    });
});
