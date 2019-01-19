"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _combi_1 = require("../../../src/abap/structures/_combi");
const Statements = require("../../../src/abap/statements");
const Structures = require("../../../src/abap/structures");
const nodes_1 = require("../../../src/abap/nodes/");
const _structure_1 = require("../../../src/abap/structures/_structure");
const _basic_node_1 = require("../../../src/abap/nodes/_basic_node");
class DummyNode extends _basic_node_1.BasicNode {
    get() {
        return undefined;
    }
    getFirstToken() {
        throw new Error("not implemented");
    }
    getLastToken() {
        throw new Error("not implemented");
    }
}
function toNodes(statements) {
    return statements.map((e) => { return new nodes_1.StatementNode(e); });
}
describe("structure combi statement", function () {
    const sta1 = _combi_1.sta(Statements.Move);
    it("sta1 match", function () {
        const parent = new DummyNode();
        const match = sta1.run(toNodes([new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
        chai_1.expect(parent.getChildren()[0].get()).to.be.instanceof(Statements.Move);
    });
    it("sta1 not match", function () {
        const parent = new DummyNode();
        const match = sta1.run(toNodes([new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(true);
    });
    it("sta1 multi", function () {
        const parent = new DummyNode();
        const match = sta1.run(toNodes([new Statements.Move(), new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("sta1 none", function () {
        const parent = new DummyNode();
        const match = sta1.run([], parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(true);
    });
});
describe("structure combi opt", function () {
    const opt1 = _combi_1.opt(_combi_1.sta(Statements.Move));
    it("opt1 match", function () {
        const parent = new DummyNode();
        const match = opt1.run(toNodes([new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("opt1 not match", function () {
        const parent = new DummyNode();
        const match = opt1.run(toNodes([new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
    it("opt1 multi", function () {
        const parent = new DummyNode();
        const match = opt1.run(toNodes([new Statements.Move(), new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("opt1 none", function () {
        const parent = new DummyNode();
        const match = opt1.run([], parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
});
describe("structure combi star", function () {
    const star1 = _combi_1.star(_combi_1.sta(Statements.Move));
    it("star1 match", function () {
        const parent = new DummyNode();
        const match = star1.run(toNodes([new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("star1 not match", function () {
        const parent = new DummyNode();
        const match = star1.run(toNodes([new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
    it("star1 multi1", function () {
        const parent = new DummyNode();
        const match = star1.run(toNodes([new Statements.Move(), new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
    });
    it("star1 multi2", function () {
        const parent = new DummyNode();
        const match = star1.run(toNodes([new Statements.Move(), new Statements.Move(), new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
    });
    it("star1 none", function () {
        const parent = new DummyNode();
        const match = star1.run([], parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
});
describe("structure combi seq", function () {
    const seq1 = _combi_1.seq(_combi_1.sta(Statements.Move), _combi_1.sta(Statements.Do));
    it("seq1 match", function () {
        const parent = new DummyNode();
        const match = seq1.run(toNodes([new Statements.Move(), new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
    });
    it("seq1 not match", function () {
        const parent = new DummyNode();
        const match = seq1.run(toNodes([new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(true);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
    it("seq1 multi2", function () {
        const parent = new DummyNode();
        const match = seq1.run(toNodes([new Statements.Move(), new Statements.Do(), new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
    });
    it("seq1 none", function () {
        const parent = new DummyNode();
        const match = seq1.run([], parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(true);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
});
describe("structure combi alt", function () {
    const alt1 = _combi_1.alt(_combi_1.sta(Statements.Move), _combi_1.sta(Statements.Do));
    it("alt1 match1", function () {
        const parent = new DummyNode();
        const match = alt1.run(toNodes([new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("alt1 match2", function () {
        const parent = new DummyNode();
        const match = alt1.run(toNodes([new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("alt1 not match", function () {
        const parent = new DummyNode();
        const match = alt1.run(toNodes([new Statements.Call()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(true);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
    it("alt1 multi2", function () {
        const parent = new DummyNode();
        const match = alt1.run(toNodes([new Statements.Move(), new Statements.Do()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("alt1 none", function () {
        const parent = new DummyNode();
        const match = alt1.run([], parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(true);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
});
describe("structure combi sub structure", function () {
    const sub1 = _combi_1.sub(new Structures.Normal());
    it("sub1 match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(1);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(1);
    });
    it("sub1 no match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.ClassDefinition()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(true);
        chai_1.expect(parent.getChildren().length).to.equal(0);
    });
});
describe("structure combi beginEnd", function () {
    const sub1 = _combi_1.beginEnd(_combi_1.sta(Statements.Do), _combi_1.sta(Statements.EndDo), _combi_1.sta(Statements.EndDo));
    it("beginEnd, match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.Do(), new Statements.EndDo(), new Statements.EndDo()]), parent);
        chai_1.expect(match.matched.length).to.equal(3);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
    });
    it("beginEnd, no match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.ClassDefinition()]), parent);
        chai_1.expect(match.matched.length).to.equal(0);
        chai_1.expect(match.unmatched.length).to.equal(1);
        chai_1.expect(match.error).to.equal(true);
    });
});
describe("structure combi, complex1", function () {
    class Normal extends _structure_1.Structure {
        getMatcher() {
            return _combi_1.alt(_combi_1.sta(Statements.Move), _combi_1.sta(Statements.Do));
        }
    }
    const sub1 = _combi_1.star(_combi_1.sub(new Normal()));
    it("complex1 match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.Move(), new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
        chai_1.expect(parent.getChildren()[0].getChildren().length).to.equal(1);
        chai_1.expect(parent.getChildren()[1].getChildren().length).to.equal(1);
    });
});
describe("structure combi, complex2", function () {
    const sub1 = _combi_1.star(_combi_1.alt(_combi_1.sta(Statements.Move), _combi_1.sta(Statements.Do)));
    it("complex2 match", function () {
        const parent = new DummyNode();
        const match = sub1.run(toNodes([new Statements.Move(), new Statements.Move()]), parent);
        chai_1.expect(match.matched.length).to.equal(2);
        chai_1.expect(match.unmatched.length).to.equal(0);
        chai_1.expect(match.error).to.equal(false);
        chai_1.expect(parent.getChildren().length).to.equal(2);
        chai_1.expect(parent.getChildren()[0].getChildren().length).to.equal(0);
        chai_1.expect(parent.getChildren()[1].getChildren().length).to.equal(0);
    });
});
