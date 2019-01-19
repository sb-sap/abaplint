"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET RUN TIME CLOCK RESOLUTION LOW.",
    "SET RUN TIME CLOCK RESOLUTION HIGH.",
    "SET RUN TIME ANALYZER ON.",
    "SET RUN TIME ANALYZER OFF.",
];
_utils_1.statementType(tests, "SET RUN TIME", Statements.SetRunTime);
