"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_error_1 = require("../../src/rules/syntax/parser_error");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "blah blah.", cnt: 1 },
    { abap: "WRITE: / 'abc'.", cnt: 0 },
    { abap: "##EXISTS\nENDMETHOD.", cnt: 0 },
    { abap: "##needed.", cnt: 0 },
    { abap: "ro_html->add('foo' && 'bar' ).", cnt: 1 },
    { abap: "moo('sdf').", cnt: 1 },
    { abap: "moo( bar).", cnt: 1 },
    { abap: "moo( 'sdf' ).", cnt: 0 },
    { abap: "moo( bar ).", cnt: 0 },
    { abap: "moo( 'sdf').", cnt: 1 },
    { abap: "APPEND NEW lcl_foo( VALUE #( connid = '456') ) TO foos.", cnt: 1 },
    { abap: "DEFINE _foo.\nEND-OF-DEFINITION.\n_foo.", cnt: 0 },
    { abap: "DEFINE _foo.\nEND-OF-DEFINITION.\n_foo ##CALLED.", cnt: 0 },
    { abap: "DEFINE _foo.\nEND-OF-DEFINITION.\n##CALLED _foo.", cnt: 0 },
    { abap: "DEFINE _foo.\nEND-OF-DEFINITION.\n_foo bar.", cnt: 0 },
    { abap: "ro_alv->get_columns(:\n" +
            ")->get_column( 'TIMESTAMP' )->set_visible( abap_false ),\n" +
            ")->get_column( 'USERNAME' )->set_visible( abap_false ).", cnt: 0 },
];
_utils_1.testRule(tests, parser_error_1.ParserError);
