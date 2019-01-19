"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitespace_end_1 = require("../../src/rules/whitespace/whitespace_end");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "WRITE 'hello'.", cnt: 0 },
    { abap: "WRITE 'hello'.  ", cnt: 1 },
];
_utils_1.testRule(tests, whitespace_end_1.WhitespaceEnd);
