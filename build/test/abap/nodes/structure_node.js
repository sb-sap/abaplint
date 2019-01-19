"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const nodes_1 = require("../../../src/abap/nodes");
const Structures = require("../../../src/abap/structures");
const Statements = require("../../../src/abap/statements");
describe("Structure node", () => {
    it("findFirstStatement, found", () => {
        const top = new nodes_1.StructureNode(new Structures.ClassDefinition());
        top.addChild(new nodes_1.StatementNode(new Statements.ClassDefinition()));
        const found = top.findFirstStatement(Statements.ClassDefinition);
        chai_1.expect(found).to.not.equal(undefined);
        if (found) {
            chai_1.expect(found.get()).to.be.instanceof(Statements.ClassDefinition);
        }
    });
    it("findFirstStatement, not found", () => {
        const top = new nodes_1.StructureNode(new Structures.ClassDefinition());
        top.addChild(new nodes_1.StatementNode(new Statements.Do()));
        const found = top.findFirstStatement(Statements.ClassDefinition);
        chai_1.expect(found).to.equal(undefined);
    });
});
