"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TYPES END OF gty_icon.",
    "TYPES END OF /foo/bar.",
];
_utils_1.statementType(tests, "TYPE END", Statements.TypeEnd);
