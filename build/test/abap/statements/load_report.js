"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "LOAD REPORT lv_prog PART 'HEAD' INTO lt_head.",
];
_utils_1.statementType(tests, "LOAD REPORT", Statements.LoadReport);
