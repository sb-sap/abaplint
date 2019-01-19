"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "call badi lr_badi->method importing ev_foo = lv_moo ev_bar = lv_boo.",
];
_utils_1.statementType(tests, "CALL BADI", Statements.CallBadi);
