"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max_one_statement_1 = require("../../src/rules/max_one_statement");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "WRITE 'hello'.  WRITE 'world'.  WRITE 'world'.", cnt: 1 },
    { abap: "WRITE 'hello'.\nWRITE 'world'.\nWRITE 'world'.", cnt: 0 },
];
_utils_1.testRule(tests, max_one_statement_1.MaxOneStatement);
