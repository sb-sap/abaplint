"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../src/registry");
const files_1 = require("../../src/files");
const stats_1 = require("../../src/stats/stats");
describe("stats", () => {
    it("statement versions", () => {
        const abap = "WRITE boo.\nIF foo = bar.\n";
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoo.prog.abap", abap)).parse();
        const stats = new stats_1.Stats(reg).run();
        chai_1.expect(stats.statements.length).to.be.greaterThan(5);
        chai_1.expect(stats.statements[0]).to.not.equal(stats.statements[stats.statements.length]);
    });
});
