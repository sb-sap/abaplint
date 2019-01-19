"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contains_tab_1 = require("../../src/rules/whitespace/contains_tab");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "data: lt_file\ttype solix_tab.", cnt: 1 },
    { abap: "\t\tIF foo = bar.", cnt: 1 },
    { abap: "IF foo = bar.", cnt: 0 },
];
_utils_1.testRule(tests, contains_tab_1.ContainsTab);
