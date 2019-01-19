"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DELETE TEXTPOOL ls_foo-name.",
    "DELETE TEXTPOOL iv_program LANGUAGE iv_program STATE lv_state.",
    "DELETE TEXTPOOL lv_pool LANGUAGE '*'.",
];
_utils_1.statementType(tests, "DELETE TEXTPOOL", Statements.DeleteTextpool);
