"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET BIT lv_bit OF lv_x INTO lv_c.",
];
_utils_1.statementType(tests, "GET BIT", Statements.GetBit);
