"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET BIT ( lv_offset MOD 8 ) + 1 OF lv_x.",
    "SET BIT lv_prev_pos OF r_pwd_hash TO lv_bit.",
];
_utils_1.statementType(tests, "SET BIT", Statements.SetBit);
