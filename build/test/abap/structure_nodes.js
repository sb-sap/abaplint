"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("../../src/abap/structures/");
const Statements = require("../../src/abap/statements/");
const chai_1 = require("chai");
const _utils_1 = require("./_utils");
describe("Structure, test generated nodes", function () {
    it("Test 01", function () {
        const result = new Structures.Else().runFile(_utils_1.parse("ELSE."));
        chai_1.expect(result.issues.length).to.equal(0);
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.Else);
            chai_1.expect(result.node.getChildren().length).to.equal(1);
            chai_1.expect(result.node.getChildren()[0].get()).to.be.instanceof(Statements.Else);
        }
    });
    it("Test 02", function () {
        const result = new Structures.Else().runFile(_utils_1.parse("ELSE. moo = boo."));
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.Else);
            chai_1.expect(result.node.getChildren().length).to.equal(2);
            chai_1.expect(result.node.getChildren()[0].get()).to.be.instanceof(Statements.Else);
            chai_1.expect(result.node.getChildren()[1].get()).to.be.instanceof(Structures.Body);
            chai_1.expect(result.node.getChildren()[1].getChildren().length).to.equal(1);
        }
    });
    it("Test 03", function () {
        const result = new Structures.Else().runFile(_utils_1.parse("ELSE. moo = boo. loo = foo."));
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.Else);
            chai_1.expect(result.node.getChildren().length).to.equal(2);
            chai_1.expect(result.node.getChildren()[0].get()).to.be.instanceof(Statements.Else);
            chai_1.expect(result.node.getChildren()[1].get()).to.be.instanceof(Structures.Body);
            chai_1.expect(result.node.getChildren()[1].getChildren().length).to.equal(2);
        }
    });
    it("Test 04", function () {
        const result = new Structures.If().runFile(_utils_1.parse("IF foo = boo. ENDIF."));
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.If);
            chai_1.expect(result.node.getChildren().length).to.equal(2);
            chai_1.expect(result.node.getChildren()[0].get()).to.be.instanceof(Statements.If);
            chai_1.expect(result.node.getChildren()[1].get()).to.be.instanceof(Statements.EndIf);
        }
    });
    it("Test 05", function () {
        const result = new Structures.If().runFile(_utils_1.parse("IF foo = boo. moo = boo. ENDIF."));
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.If);
            chai_1.expect(result.node.getChildren().length).to.equal(3);
        }
    });
    it("Test 06", function () {
        const result = new Structures.Any().runFile(_utils_1.parse("moo = boo. loo = foo."));
        chai_1.expect(result.node).to.not.equal(undefined);
        if (result.node) {
            chai_1.expect(result.node.get()).to.be.instanceof(Structures.Any);
            chai_1.expect(result.node.getChildren().length).to.equal(2);
            const count = result.node.getChildren()[0].getChildren().length + result.node.getChildren()[1].getChildren().length;
            chai_1.expect(count).to.equal(2);
        }
    });
});
