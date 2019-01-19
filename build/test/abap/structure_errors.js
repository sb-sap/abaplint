"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("../../src/abap/structures/");
const chai_1 = require("chai");
const _utils_1 = require("./_utils");
const structure_parser_1 = require("../../src/abap/structure_parser");
const nodes_1 = require("../../src/abap/nodes/");
const cases = [
    { abap: "IF foo = bar.", error: "Expected ENDIF", structure: new Structures.If(), errorMatched: 1 },
    { abap: "IF foo = bar. moo = boo.", error: "Expected ENDIF", structure: new Structures.If(), errorMatched: 2 },
    { abap: "IF foo = bar. ENDWHILE.", error: "Expected ENDIF", structure: new Structures.If(), errorMatched: 1 },
    { abap: "IF foo = bar. ENDWHILE. ENDIF.", error: "Expected ENDIF", structure: new Structures.If(), errorMatched: 1 },
];
describe("Structure, test error messages, specific", function () {
    cases.forEach((c) => {
        it(c.abap, function () {
            // todo, refactor?
            const result = c.structure.getMatcher().run(_utils_1.getStatements(c.abap), new nodes_1.StructureNode(c.structure));
            chai_1.expect(result.error).to.equal(true);
            chai_1.expect(result.errorMatched).to.equal(c.errorMatched);
            chai_1.expect(result.errorDescription).to.equal(c.error);
        });
    });
});
const parser = [
    { abap: "ENDIF.", error: "Unexpected ENDIF" },
    { abap: "IF foo = bar.", error: "Expected ENDIF" },
    { abap: "IF foo = bar. ENDIF. ENDWHILE.", error: "Unexpected ENDWHILE" },
    { abap: "CLASS zfoo DEFINITION. ENDCLASS.", error: "" },
    { abap: "IF foo = bar. ENDIF. WRITE asdf.", error: "" },
    { abap: "IF foo = bar. IF moo = boo.", error: "Expected ENDIF" },
    { abap: "IF foo = bar. IF moo = boo. ENDIF.", error: "Expected ENDIF" },
    { abap: "CLASS zfoo DEFINITION. PUBLIC SECTION. ENDCLASS.", error: "" },
    { abap: "DO 2 TIMES. ENDDO.", error: "" },
    { abap: "DO 2 TIMES.\n*comment\nENDDO.", error: "" },
    { abap: "DO 2 TIMES.", error: "Expected ENDDO" },
    { abap: "CLASS zfoo DEFINITION. PUBLIC SECTION. WRITE asdf. ENDCLASS.", error: "Expected ENDCLASS" },
];
describe("Structure, test error messages, parser", function () {
    parser.forEach((c) => {
        it(c.abap, function () {
            const file = _utils_1.parse(c.abap);
            const issues = structure_parser_1.StructureParser.run(file).issues;
            if (c.error === "") {
                chai_1.expect(issues.length).to.equal(0);
            }
            else {
                chai_1.expect(issues.length).to.equal(1);
                chai_1.expect(issues[0].getMessage()).to.equal(c.error);
            }
        });
    });
});
