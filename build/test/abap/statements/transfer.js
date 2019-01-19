"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TRANSFER lv_file  TO lv_default_file_name.",
    "TRANSFER <rawdata> TO p_back LENGTH bytes.",
];
_utils_1.statementType(tests, "TRANSFER", Statements.Transfer);
