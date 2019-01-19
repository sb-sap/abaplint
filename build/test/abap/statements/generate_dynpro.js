"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GENERATE DYNPRO H F E M ID key MESSAGE field1 LINE field2 WORD field3.",
    "GENERATE DYNPRO ls_header lt_fieldlist lt_flowlogic lt_matchcode ID lv_id MESSAGE l_mess WORD l_word LINE l_line.",
];
_utils_1.statementType(tests, "GENERATE DYNPRO", Statements.GenerateDynpro);
