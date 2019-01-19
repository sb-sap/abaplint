"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET RUN TIME FIELD lv_t1.",
];
_utils_1.statementType(tests, "GET RUN TIME", Statements.GetRunTime);
