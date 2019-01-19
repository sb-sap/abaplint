"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_upper_1 = require("../../src/rules/keywords_upper");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "if a = b.", cnt: 1 },
    { abap: "foo = |sdf|.", cnt: 0 },
    { abap: "foo = boolc( 1 = 2 ).", cnt: 0 },
    { abap: "IF a = b.", cnt: 0 },
];
_utils_1.testRule(tests, keywords_upper_1.KeywordsUpper);
