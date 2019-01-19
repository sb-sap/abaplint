"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET LOCALE LANGUAGE lang COUNTRY cntry MODIFIER mod.",
];
_utils_1.statementType(tests, "GET LOCALE", Statements.GetLocale);
