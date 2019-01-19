"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../src/registry");
const files_1 = require("../../src/files");
const method_length_stats_1 = require("../../src/stats/method_length_stats");
describe("method length stats", () => {
    const tests = [
        { abap: "foo bar", lengths: [] },
        { abap: "ENDMETHOD.", lengths: [] },
        { abap: "METHOD foo. ENDMETHOD.", lengths: [0] },
        { abap: "METHOD foo. ENDMETHOD. METHOD bar. ENDMETHOD.", lengths: [0, 0] },
        { abap: "METHOD foo. WRITE moo. ENDMETHOD.", lengths: [1] },
        { abap: "METHOD foo. WRITE moo. WRITE boo. ENDMETHOD.", lengths: [2] },
    ];
    tests.forEach((test) => {
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoo.clas.abap", test.abap)).parse();
        const stats = method_length_stats_1.MethodLengthStats.run(reg.getObjects()[0]);
        it(test.abap, () => {
            chai_1.expect(stats.length).to.equals(test.lengths.length);
            for (let i = 0; i < stats.length; i++) {
                chai_1.expect(stats[i].count).to.equals(test.lengths[i]);
            }
        });
    });
});
