"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "LOG-POINT ID foobar SUBKEY subkey.",
    "LOG-POINT ID __foobar__ SUBKEY subkey.",
    "LOG-POINT ID foobar.",
    "LOG-POINT ID foobar SUBKEY 'sub' FIELDS 'foobar'.",
    "LOG-POINT ID foobar SUBKEY 'sub' FIELDS 'foo' 'bar'.",
    "LOG-POINT ID /foo/bar FIELDS sy-uname.",
];
_utils_1.statementType(tests, "LOG-POINT", Statements.LogPoint);
