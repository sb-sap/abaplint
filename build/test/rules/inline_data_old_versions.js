"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memory_file_1 = require("../../src/files/memory_file");
const registry_1 = require("../../src/registry");
const chai_1 = require("chai");
const inline_data_old_versions_1 = require("../../src/rules/syntax/inline_data_old_versions");
const version_1 = require("../../src/version");
const config_1 = require("../../src/config");
function findIssues(abap, version) {
    const config = config_1.Config.getDefault().setVersion(version);
    const reg = new registry_1.Registry(config).addFile(new memory_file_1.MemoryFile("zfoo.prog.abap", abap)).parse();
    const rule = new inline_data_old_versions_1.InlineDataOldVersions();
    return rule.run(reg.getObjects()[0], reg);
}
describe("Rule: inline data on old versions", function () {
    it("no issues", function () {
        chai_1.expect(findIssues("DATA(foo) = 2.").length).to.equal(0);
    });
    it("issue", function () {
        chai_1.expect(findIssues("DATA(foo) = 2.", version_1.Version.v702).length).to.equal(1);
    });
});
