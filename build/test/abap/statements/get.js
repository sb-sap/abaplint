"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET foobar.",
    "GET foobar LATE.",
    "GET foobar FIELDS field1 field2.",
    "GET foobar LATE FIELDS field.",
];
_utils_1.statementType(tests, "GET", Statements.Get);
