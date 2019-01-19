"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET REFERENCE OF ig_data INTO <ls_stab>-value.",
];
_utils_1.statementType(tests, "GET REFERENCE", Statements.GetReference);
