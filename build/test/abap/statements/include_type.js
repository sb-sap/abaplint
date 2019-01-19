"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "include type t_type.",
    "INCLUDE STRUCTURE zfoo.",
    "include type t_type as something.",
    "INCLUDE TYPE foo AS bar RENAMING WITH SUFFIX 1.",
];
_utils_1.statementType(tests, "INCLUDE TYPE", Statements.IncludeType);
