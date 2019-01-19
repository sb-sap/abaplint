"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET LOCALE LANGUAGE lang COUNTRY cntry.",
    "SET LOCALE LANGUAGE lang.",
    "SET LOCALE LANGUAGE lv_lang COUNTRY lv_country MODIFIER lv_mod.",
];
_utils_1.statementType(tests, "SET LOCALE", Statements.SetLocale);
