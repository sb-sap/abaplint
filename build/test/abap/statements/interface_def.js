"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const version_1 = require("../../../src/version");
const tests = [
    "INTERFACES lif_gui_page ABSTRACT METHODS render.",
    "INTERFACES zif_foo PARTIALLY IMPLEMENTED.",
    "interfaces zif_foo all methods abstract.",
    "interfaces zif_foo abstract methods ACTIVATE DEACTIVATE.",
    "interfaces zif_foo data values HEIGHT = 100 WIDTH = 100.",
    "INTERFACES zif_alog_logger FINAL METHODS entry.",
    "interfaces zif_foo all methods final.",
];
_utils_1.statementType(tests, "INTERFACES", Statements.InterfaceDef);
const versions = [
    { abap: "INTERFACES zif_foo PARTIALLY IMPLEMENTED.", ver: version_1.Version.v740sp02 },
];
_utils_1.statementVersion(versions, "INTERFACES", Statements.InterfaceDef);
