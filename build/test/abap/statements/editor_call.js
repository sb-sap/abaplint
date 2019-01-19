"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "EDITOR-CALL FOR lv_source DISPLAY-MODE TITLE lv_title.",
    "EDITOR-CALL FOR REPORT 'ZFOO'.",
    "EDITOR-CALL FOR lt_text TITLE lv_title DISPLAY-MODE.",
];
_utils_1.statementType(tests, "EDITOR-CALL", Statements.EditorCall);
