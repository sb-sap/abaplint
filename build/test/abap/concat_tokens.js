"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _utils_1 = require("./_utils");
describe("concat_tokens", () => {
    const tests = [
        "REPORT zfoo.",
        "WRITE 'Hello'.",
        "WRITE foo-bar.",
    ];
    tests.forEach((test) => {
        it(test, () => {
            const statements = _utils_1.getStatements(test);
            const concat = statements[0].concatTokens();
            chai_1.expect(concat).to.equals(test);
        });
    });
});
