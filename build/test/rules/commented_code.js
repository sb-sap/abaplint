"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commented_code_1 = require("../../src/rules/commented_code");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "parser error", cnt: 0 },
    { abap: "WRITE: / 'hello'.", cnt: 0 },
    { abap: "* WRITE: / 'hello'.", cnt: 1 },
    { abap: "* .", cnt: 0 },
    { abap: "* ", cnt: 0 },
    { abap: "* hello", cnt: 0 },
];
_utils_1.testRule(tests, commented_code_1.CommentedCode);
