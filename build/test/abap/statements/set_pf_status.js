"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET PF-STATUS 'STATUS_0004'.",
    "SET PF-STATUS 'STATUS_0004' EXCLUDING lt_fcode.",
    "set pf-status 'FOO' of program 'ZFOO' excluding lt_exc.",
    "set pf-status 'LIST' immediately excluding ftab.",
    "SET PF-STATUS foo-bar EXCLUDING excl OF PROGRAM modul-pool.",
];
_utils_1.statementType(tests, "SET PF-STATUS", Statements.SetPFStatus);
