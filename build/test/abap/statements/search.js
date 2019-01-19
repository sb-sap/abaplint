"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SEARCH foo-bar FOR '/' STARTING AT 2.",
    "search foo for bar in byte mode.",
    "search foo for bar in character mode starting at lv_start.",
    "search foo for 'a' starting at 1 ending at 2.",
    "SEARCH foo FOR tag STARTING AT lv_start IN BYTE MODE.",
    "SEARCH foo-bar FOR 'val' AND MARK.",
];
_utils_1.statementType(tests, "SEARCH", Statements.Search);
