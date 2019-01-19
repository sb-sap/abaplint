"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _7bit_ascii_1 = require("../../src/rules/7bit_ascii");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "WRITE: / 'æøå'.", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
];
_utils_1.testRule(tests, _7bit_ascii_1.SevenBitAscii);
