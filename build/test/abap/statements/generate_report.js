"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "generate report lv_name.",
    "generate report lv_name\n" +
        "  without selection-screen\n" +
        "  message lv_message\n" +
        "  include lv_include\n" +
        "  line lv_line\n" +
        "  word lv_word.",
    "GENERATE REPORT lv_name\n" +
        "  MESSAGE lv_message\n" +
        "  INCLUDE lv_include\n" +
        "  LINE    lv_line\n" +
        "  WORD    lv_word\n" +
        "  OFFSET  lv_offset.",
    "GENERATE REPORT l_name WITH PRECOMPILED HEADERS.",
    "GENERATE REPORT l_name WITH PRECOMPILED HEADERS WITH TEST CODE.",
];
_utils_1.statementType(tests, "GENERATE REPORT", Statements.GenerateReport);
