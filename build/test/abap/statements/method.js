"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "METHOD zfoobar.",
    "METHOD foobar by kernel module foobar fail.",
    "METHOD foobar by kernel module foobar ignore.",
    "METHOD if_foo~write BY KERNEL MODULE foobar.",
];
_utils_1.statementType(tests, "METHOD", Statements.Method);
