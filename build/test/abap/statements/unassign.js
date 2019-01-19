"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "UNASSIGN <blah>.",
    "UNASSIGN <%%foo>.",
];
_utils_1.statementType(tests, "UNASSIGN", Statements.Unassign);
