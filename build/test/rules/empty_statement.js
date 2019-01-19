"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empty_statement_1 = require("../../src/rules/empty_statement");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "types: foo type c.  .", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
];
_utils_1.testRule(tests, empty_statement_1.EmptyStatement);
