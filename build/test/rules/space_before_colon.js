"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space_before_colon_1 = require("../../src/rules/whitespace/space_before_colon");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "WRITE : 'foo'.", cnt: 1 },
    { abap: "WRITE: 'foo'.", cnt: 0 },
    { abap: ":WRITE 'foo'.", cnt: 0 },
];
_utils_1.testRule(tests, space_before_colon_1.SpaceBeforeColon);
