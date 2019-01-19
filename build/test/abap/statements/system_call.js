"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "system-call query class ls_class-clsname.",
];
_utils_1.statementType(tests, "SYSTEM-CALL", Statements.SystemCall);
