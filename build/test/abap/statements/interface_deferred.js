"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "interface if_ixml_node deferred.",
    "INTERFACE zif_foobar DEFERRED PUBLIC.",
];
_utils_1.statementType(tests, "INTERFACE DEFERRED", Statements.InterfaceDeferred);
