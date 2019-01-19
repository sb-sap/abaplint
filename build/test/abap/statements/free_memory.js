"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "free memory id ls_structure.",
    "free memory id 'ALV_SUBMIT_TO_SPOOL'.",
];
_utils_1.statementType(tests, "FREE MEMORY", Statements.FreeMemory);
