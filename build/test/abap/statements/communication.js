"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "COMMUNICATION INIT ID c DESTINATION dest.",
    "COMMUNICATION ALLOCATE ID c.",
    "COMMUNICATION SEND ID c BUFFER connect.",
    "COMMUNICATION DEALLOCATE ID c.",
    "COMMUNICATION SEND ID c BUFFER <output> LENGTH slenx.",
    "COMMUNICATION RECEIVE ID c BUFFER input DATAINFO dinf STATUSINFO sinf RECEIVED rlen.",
    "COMMUNICATION ACCEPT ID c.",
];
_utils_1.statementType(tests, "COMMUNICATION", Statements.Communication);
