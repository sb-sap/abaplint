"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET LANGUAGE SY-LANGU.",
];
_utils_1.statementType(tests, "SET LANGUAGE", Statements.SetLanguage);
