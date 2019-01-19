"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "INSERT TEXTPOOL is_progdir-name FROM it_tpool LANGUAGE mv_language STATE 'I'.",
    "INSERT textpool l_name FROM it_tpool LANGUAGE sy-langu.",
    "INSERT TEXTPOOL target FROM tab.",
];
_utils_1.statementType(tests, "INSERT TEXTPOOL", Statements.InsertTextpool);
