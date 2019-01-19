"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colon_missing_space_1 = require("../../src/rules/whitespace/colon_missing_space");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "WRITE:/ 'foobar'.", cnt: 1 },
    { abap: "WRITE / 'foobar:'.", cnt: 0 },
    { abap: "WRITE / 'foobar'.", cnt: 0 },
];
_utils_1.testRule(tests, colon_missing_space_1.ColonMissingSpace);
