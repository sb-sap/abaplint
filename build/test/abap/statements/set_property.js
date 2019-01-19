"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET PROPERTY OF io_app_obj 'StatusBar' = 'OLE Call'.",
];
_utils_1.statementType(tests, "SET PROPERTY", Statements.SetProperty);
