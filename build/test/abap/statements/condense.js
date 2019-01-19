"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "condense lv_foo.",
    "CONDENSE lv_index_str NO-GAPS.",
];
_utils_1.statementType(tests, "CONDENSE", Statements.Condense);
