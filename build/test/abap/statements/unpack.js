"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "UNPACK lv_dt TO lv_date.",
];
_utils_1.statementType(tests, "UNPACK", Statements.Unpack);
