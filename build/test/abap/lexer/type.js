"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const files_1 = require("../../../src/files");
const lexer_1 = require("../../../src/abap/lexer");
const Tokens = require("../../../src/abap/tokens");
const tests = [
    { abap: "foo", type: Tokens.Identifier },
    { abap: "\"stsdf\"", type: Tokens.Comment },
    { abap: " 'stsdf'", type: Tokens.String },
    { abap: "##ASDF", type: Tokens.Pragma },
    { abap: "#foo", type: Tokens.Identifier },
];
describe("lexer types", () => {
    tests.forEach((test) => {
        const tokens = lexer_1.Lexer.run(new files_1.MemoryFile("foo.abap", test.abap));
        it("\"" + test.abap + "\" should be " + test.type["name"], () => {
            chai_1.expect(tokens.length).to.equals(1);
            chai_1.expect(tokens[0].constructor["name"]).to.equals(test.type["name"]);
        });
    });
});
