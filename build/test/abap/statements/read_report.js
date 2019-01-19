"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "READ REPORT ls_include INTO rt_source STATE 'A'.",
    "READ REPORT is_level-name INTO rt_code.",
    "READ REPORT lv_prog STATE lv_version INTO rt_code.",
    "READ REPORT lv_prog STATE 'A' INTO lt_code MAXIMUM WIDTH INTO l_width.",
];
_utils_1.statementType(tests, "READ REPORT", Statements.ReadReport);
