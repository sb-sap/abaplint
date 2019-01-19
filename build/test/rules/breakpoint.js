"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const breakpoint_1 = require("../../src/rules/breakpoint");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "break-point.", cnt: 1 },
    { abap: "break user.", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
    { abap: "break-point id foo.", cnt: 0 },
];
_utils_1.testRule(tests, breakpoint_1.Breakpoint);
