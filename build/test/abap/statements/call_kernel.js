"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CALL 'SYST_LOGOFF'.",
    "CALL 'INTERNET_USER_LOGON' ID 'AUTHTYPE' FIELD AUTH_METHOD ID 'TESTMODE' FIELD SPACE.",
    "call funcname id 'FOO' field lv_foo id 'BAR' field lv_bar.",
];
_utils_1.statementType(tests, "CALL kernel", Statements.CallKernel);
