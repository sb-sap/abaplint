"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TYPES BEGIN OF gty_icon.",
    "TYPES BEGIN OF /foo/bar.",
];
_utils_1.statementType(tests, "TYPE BEGIN", Statements.TypeBegin);
