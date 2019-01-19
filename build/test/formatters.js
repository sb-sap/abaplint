"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _format_1 = require("../src/formatters/_format");
const _utils_1 = require("./abap/_utils");
describe("formatters", () => {
    const tests = [
        { abap: "foo bar", errors: 1 },
        { abap: "IF foo = bar.", errors: 1 },
        { abap: "WRITE 'Hello'.", errors: 0 },
    ];
    tests.forEach((test) => {
        const issues = _utils_1.findIssues(test.abap);
        it(test.abap, () => {
            chai_1.expect(issues.length).to.equals(test.errors);
            chai_1.expect(_format_1.Formatter.format(issues, "json", 1).split("\n").length).to.equals(2);
            chai_1.expect(issues.length).to.equals(test.errors);
            chai_1.expect(_format_1.Formatter.format(issues, "standard", 1).split("\n").length).to.equals(test.errors + 2);
            chai_1.expect(issues.length).to.equals(test.errors);
            chai_1.expect(_format_1.Formatter.format(issues, "total", 1).split("\n").length).to.equals(2);
        });
    });
});
