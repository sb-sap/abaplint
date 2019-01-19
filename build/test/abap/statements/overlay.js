"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "OVERLAY lv_qty WITH '000000000000000000'.",
    "OVERLAY foo WITH bar ONLY '.'.",
];
_utils_1.statementType(tests, "OVERLAY", Statements.Overlay);
