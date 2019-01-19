"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nesting_1 = require("../../src/rules/nesting");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "IF a = b. IF a = b. IF a = b. IF a = b. IF a = b. IF a = b. IF a = b. IF a = b.", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
];
_utils_1.testRule(tests, nesting_1.Nesting);
