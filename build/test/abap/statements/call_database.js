"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CALL DATABASE PROCEDURE ('ZFOO')\n" +
        "  EXPORTING foo = bar\n" +
        "  IMPORTING moo = boo.",
    "CALL DATABASE PROCEDURE (lv_name) CONNECTION (lv_con) PARAMETER-TABLE lt_par.",
];
_utils_1.statementType(tests, "CALL DATABASE", Statements.CallDatabase);
