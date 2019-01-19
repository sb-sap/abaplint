"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET TIME STAMP FIELD lv_timestamp.",
    "GET TIME.",
    "GET TIME FIELD lv_time.",
];
_utils_1.statementType(tests, "GET TIME", Statements.GetTime);
