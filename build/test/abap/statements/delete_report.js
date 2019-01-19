"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DELETE REPORT zfoobar.",
    "DELETE REPORT ls_foo-name.",
    "delete report lv_report state 'I'.",
];
_utils_1.statementType(tests, "DELETE REPORT", Statements.DeleteReport);
