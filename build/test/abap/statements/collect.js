"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "COLLECT WA_VBBE INTO IT_VBBE.",
    "COLLECT users.",
];
_utils_1.statementType(tests, "COLLECT", Statements.Collect);
