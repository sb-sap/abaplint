"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ROLLBACK WORK.",
    "ROLLBACK CONNECTION (lv_con).",
    "ROLLBACK CONNECTION default.",
];
_utils_1.statementType(tests, "ROLLBACK WORK", Statements.Rollback);
