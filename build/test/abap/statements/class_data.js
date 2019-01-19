"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "class-data EOL type CHAR01 value CL_ABAP_CHAR_UTILITIES=>CR_LF.",
    "CLASS-DATA gv_out TYPE xstring.",
    "class-data gv_var type zfoo value 'FOO' read-only .",
];
_utils_1.statementType(tests, "CLASS-DATA", Statements.ClassData);
