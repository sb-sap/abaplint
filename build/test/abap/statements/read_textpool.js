"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "READ TEXTPOOL lv_cp INTO lt_tpool LANGUAGE mv_language.",
    "READ TEXTPOOL lv_cp INTO lt_tpool.",
    "read textpool lv_cp language mv_lang into lt_tpool state 'A'.",
];
_utils_1.statementType(tests, "READ TEXTPOOL", Statements.ReadTextpool);
