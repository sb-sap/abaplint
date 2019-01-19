"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _statement_1 = require("../../src/abap/statements/_statement");
const _utils_1 = require("./_utils");
describe("unknown statements", () => {
    const tests = [
        "data foo bar.",
        "asdf.",
        "asdf",
        "asdf asdf.",
    ];
    tests.forEach((abap) => {
        it("\"" + abap + "\" should be unknown", () => {
            const statements = _utils_1.getStatements(abap);
            chai_1.expect(statements.length).to.equals(1);
            for (const statement of statements) {
                chai_1.expect(statement.get() instanceof _statement_1.Unknown).to.equals(true);
            }
        });
    });
});
