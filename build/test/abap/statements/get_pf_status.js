"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET PF-STATUS lv_stat.",
    "GET PF-STATUS vv_stat PROGRAM lv_prog EXCLUDING lt_fcode.",
];
_utils_1.statementType(tests, "GET PF-STATUS", Statements.GetPFStatus);
