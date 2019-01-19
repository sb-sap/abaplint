"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CONSTANTS c_cluster_type TYPE c VALUE 'C'.",
    "constants lc_empty type string value is initial.",
    "constants c_oo_class(7)      VALUE 'foobar'.",
    "constants /foo/bar type string value 'val'.",
    "CONSTANTS $blah TYPE syst-msgty VALUE 'I'.",
    "CONSTANTS lc_foo TYPE string VALUE `foo` & `bar`.",
    "CONSTANTS id1 TYPE x LENGTH 2 VALUE '1122'.",
    "CONSTANTS id2 VALUE '1122' TYPE x LENGTH 2.",
    "CONSTANTS id3 VALUE '1122' LENGTH 2 TYPE x.",
    "CONSTANTS lc_price TYPE p DECIMALS 4 VALUE '0.01'.",
];
_utils_1.statementType(tests, "CONSTANT", Statements.Constant);
