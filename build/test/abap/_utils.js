"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const files_1 = require("../../src/files");
const config_1 = require("../../src/config");
const chai_1 = require("chai");
const version_1 = require("../../src/version");
const _statement_1 = require("../../src/abap/statements/_statement");
const lexer_1 = require("../../src/abap/lexer");
const statement_parser_1 = require("../../src/abap/statement_parser");
const registry_1 = require("../../src/registry");
const nodes_1 = require("../../src/abap/nodes/");
// utils for testing
function getTokens(abap) {
    return lexer_1.Lexer.run(new files_1.MemoryFile("cl_foo.clas.abap", abap));
}
exports.getTokens = getTokens;
function getStatements(abap, version) {
    if (version === undefined) {
        version = config_1.Config.getDefault().getVersion();
    }
    return statement_parser_1.StatementParser.run(getTokens(abap), version);
}
exports.getStatements = getStatements;
function findIssues(abap) {
    const file = new files_1.MemoryFile("cl_foo.prog.abap", abap);
    return new registry_1.Registry().addFile(file).findIssues();
}
exports.findIssues = findIssues;
function parse(abap, config) {
    const file = new files_1.MemoryFile("cl_foo.prog.abap", abap);
    return new registry_1.Registry(config).addFile(file).parse().getABAPFiles()[0];
}
exports.parse = parse;
function run(abap, text, type, version) {
    const config = config_1.Config.getDefault().setVersion(version);
    const file = parse(abap, config);
    const slist = file.getStatements();
    if (version === undefined) {
        version = config_1.Config.getDefault().getVersion();
    }
    it(text, () => {
        chai_1.expect(slist[0].get()).to.be.instanceof(type);
        // assumption: no colons in input
        chai_1.expect(slist[0].getTokens().length).to.equal(file.getTokens(false).length);
    });
}
function structureType(cas, expected) {
    describe("Structure type", function () {
        cas.forEach((c) => {
            it(c.abap, function () {
                const file = parse(c.abap);
                const statements = file.getStatements();
                const length = statements.length;
                const match = expected.getMatcher().run(statements.slice(), new nodes_1.StructureNode(expected));
                chai_1.expect(match.errorDescription).to.equal("");
                chai_1.expect(length).to.equal(statements.length);
                chai_1.expect(match.error).to.equal(false);
                chai_1.expect(match.matched.length).to.equal(length);
            });
        });
    });
}
exports.structureType = structureType;
function statementType(tests, description, type) {
    describe(description + " statement type", function () {
        // note that timeout() only works inside function()
        this.timeout(200); // tslint:disable-line
        tests.forEach((test) => {
            run(test, "\"" + test + "\" should be " + description, type);
        });
    });
}
exports.statementType = statementType;
function statementVersion(tests, description, type) {
    describe(description + " statement version,", function () {
        // note that timeout() only works inside function()
        this.timeout(200); // tslint:disable-line
        tests.forEach((test) => {
            run(test.abap, "\"" + test.abap + "\" should be " + description, type, test.ver);
            // should fail in previous version
            const lower = test.ver - 1;
            run(test.abap, "\"" + test.abap + "\" should not work in lower version(" + version_1.versionToText(lower) + ")", _statement_1.Unknown, lower);
        });
    });
}
exports.statementVersion = statementVersion;
