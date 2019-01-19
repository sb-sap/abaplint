"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_at_tab_1 = require("../../src/rules/whitespace/start_at_tab");
const _utils_1 = require("./_utils");
const tests = [
    { abap: " WRITE 'foobar'.", cnt: 1 },
    { abap: " WRITE 'foobar'.\n WRITE 'moo'.", cnt: 2 },
    { abap: "WRITE 'foobar'.", cnt: 0 },
    { abap: " \"sdf", cnt: 0 },
    { abap: "moo = boo.  \"sdf", cnt: 0 },
    { abap: "TYPES: BEGIN OF ty_file.\n         INCLUDE TYPE ty_file_signature.\n" +
            "TYPES:   data     TYPE xstring,\n       END OF ty_file.", cnt: 0 },
];
_utils_1.testRule(tests, start_at_tab_1.StartAtTab);
