"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET PROPERTY OF ctrl-obj prop = val NO FLUSH.",
    "GET PROPERTY OF io_app_obj 'Charts' = lv_charts.",
    "GET PROPERTY OF ctrl-obj prop = val NO FLUSH EXPORTING foo = bar.",
];
_utils_1.statementType(tests, "GET PROPERTY", Statements.GetProperty);
