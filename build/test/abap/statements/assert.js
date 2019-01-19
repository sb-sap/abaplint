"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ASSERT <lv_field> IS ASSIGNED.",
    "ASSERT CONDITION 0 = 1.",
    "ASSERT ID user_mgnt_law CONDITION lv_in_central EQ 'X'.",
    "ASSERT ID __foo__ CONDITION lv_in_central EQ 'X'.",
    "ASSERT FIELDS lx_root->get_text( ) CONDITION 1 = 0.",
    "ASSERT ID bar SUBKEY 'FOO' FIELDS field CONDITION sy-subrc EQ 0.",
    "ASSERT ID /foo/bar CONDITION sy-subrc = 0.",
];
_utils_1.statementType(tests, "ASSERT", Statements.Assert);
