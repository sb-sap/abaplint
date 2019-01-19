"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../nodes/");
const issue_1 = require("../../issue");
// todo, this should also have an interface
class Structure {
    runFile(file, statements) {
        statements = statements ? statements : file.getStatements();
        const parent = new nodes_1.StructureNode(this);
        const result = this.getMatcher().run(statements, parent);
        if (result.error) {
            return { issues: [new issue_1.Issue({ file, key: "structure", message: result.errorDescription })], node: undefined };
        }
        if (result.unmatched.length > 0) {
            const statement = result.unmatched[0];
            const descr = "Unexpected " + statement.get().constructor.name.toUpperCase();
            return { issues: [new issue_1.Issue({ file, message: descr, key: "structure", start: statement.getStart() })], node: undefined };
        }
        return { issues: [], node: parent };
    }
}
exports.Structure = Structure;
