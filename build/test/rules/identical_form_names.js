"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../src/rules");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "sdfsdfds.", cnt: 0 },
    { abap: "FORM foobar.\nENDFORM.", cnt: 0 },
    { abap: "FORM moo.\nENDFORM.\nFORM boo.\nENDFORM.", cnt: 0 },
    { abap: "FORM abc.\nENDFORM.\nFORM ABC.\nENDFORM.", cnt: 1 },
];
_utils_1.testRule(tests, rules_1.IdenticalFormNames);
