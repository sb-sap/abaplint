"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "WHILE strlen( rv_bits ) < iv_length.",
    "WHILE NOT lv_hex IS INITIAL.",
    "WHILE lv_int < 10 VARY lv_vary FROM field1 NEXT field2.",
];
_utils_1.statementType(tests, "WHILE", Statements.While);
