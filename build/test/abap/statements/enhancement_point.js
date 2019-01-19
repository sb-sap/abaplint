"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ENHANCEMENT-POINT point SPOTS spot.",
    "ENHANCEMENT-POINT point SPOTS spot STATIC.",
    "ENHANCEMENT-POINT foo-bar SPOTS spot.",
    "ENHANCEMENT-POINT point SPOTS spot INCLUDE BOUND.",
];
_utils_1.statementType(tests, "ENHANCEMENT-POINT", Statements.EnhancementPoint);
