"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET PARAMETER ID 'GR8' FIELD gv_memid_gr8.",
    "GET PARAMETER ID 'ZID' FIELD ls_foo-bar.",
];
_utils_1.statementType(tests, "GET PARAMETER", Statements.GetParameter);
