"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "IMPORT NAMETAB ls_data lt_data ID lv_name.",
];
_utils_1.statementType(tests, "IMPORT NAMETAB", Statements.ImportNametab);
