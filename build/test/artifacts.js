"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const artifacts_1 = require("../src/artifacts");
const objects_1 = require("../src/objects");
describe("Top level artifacts", () => {
    it("CLAS", () => {
        const obj = artifacts_1.Artifacts.newObject("ZCL_FOOBAR", "CLAS");
        chai_1.expect(obj).to.be.instanceof(objects_1.Class);
    });
    it("Throw error", () => {
        chai_1.expect(() => { return artifacts_1.Artifacts.newObject("ASDF", "ASDF"); }).to.throw("Unknown object type: ASDF");
    });
});
