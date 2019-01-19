"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequential_blank_1 = require("../../src/rules/whitespace/sequential_blank");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "\n\n\n\n", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
];
_utils_1.testRule(tests, sequential_blank_1.SequentialBlank);
