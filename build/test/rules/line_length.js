"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_length_1 = require("../../src/rules/line_length");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "hello hello hello hello hello hello hello hello hello " +
            "hello hello hello hello hello hello hello hello hello " +
            "hello hello hello hello hello hello hello hello hello " +
            "hello hello hello hello hello hello hello hello hello", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
];
_utils_1.testRule(tests, line_length_1.LineLength);
