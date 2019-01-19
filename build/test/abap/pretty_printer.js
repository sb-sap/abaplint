"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const pretty_printer_1 = require("../../src/abap/pretty_printer");
const files_1 = require("../../src/files");
const registry_1 = require("../../src/registry");
describe("Pretty printer, keywords upper case", () => {
    const tests = [
        { input: "REPORT zfoo.", expected: "REPORT zfoo." },
        { input: "report zfoo.", expected: "REPORT zfoo." },
        { input: "write report.", expected: "WRITE report." },
        { input: "data(foo) = 2.", expected: "DATA(foo) = 2." },
        { input: "WRITE foo.\nwrite bar.", expected: "WRITE foo.\nWRITE bar." },
    ];
    tests.forEach((test) => {
        it(test.input, () => {
            const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoo.prog.abap", test.input)).parse();
            chai_1.expect(reg.getABAPFiles().length).to.equal(1);
            const result = new pretty_printer_1.PrettyPrinter(reg.getABAPFiles()[0]).run();
            chai_1.expect(result).to.equals(test.expected);
        });
    });
});
describe("Pretty printer, indent code", () => {
    const tests = [
        { input: "parser error.", expected: "parser error." },
        { input: "REPORT zfoo.", expected: "REPORT zfoo." },
        { input: "REPORT zfoo.\nWRITE moo.", expected: "REPORT zfoo.\nWRITE moo." },
        { input: "IF foo = bar.\nWRITE moo.\nENDIF.", expected: "IF foo = bar.\n  WRITE moo.\nENDIF." },
    ];
    tests.forEach((test) => {
        it(test.input, () => {
            const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoo.prog.abap", test.input)).parse();
            chai_1.expect(reg.getABAPFiles().length).to.equal(1);
            const result = new pretty_printer_1.PrettyPrinter(reg.getABAPFiles()[0]).run();
            chai_1.expect(result).to.equals(test.expected);
        });
    });
});
describe("Pretty printer, expected indentation", () => {
    const tests = [
        { input: "parser error.", expected: [1] },
        { input: "REPORT zfoo.", expected: [1] },
        { input: "REPORT zfoo.\nWRITE moo.", expected: [1, 1] },
        { input: "IF foo = bar.\nWRITE moo.\nENDIF.", expected: [1, 3, 1] },
    ];
    tests.forEach((test) => {
        it(test.input, () => {
            const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("zfoo.prog.abap", test.input)).parse();
            chai_1.expect(reg.getABAPFiles().length).to.equal(1);
            const result = new pretty_printer_1.PrettyPrinter(reg.getABAPFiles()[0]).getExpectedIndentation();
            chai_1.expect(result).to.deep.equal(test.expected);
        });
    });
});
