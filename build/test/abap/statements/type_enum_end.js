"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TYPES END OF ENUM name STRUCTURE name2.",
];
_utils_1.statementType(tests, "TYPE ENUM END", Statements.TypeEnumEnd);
