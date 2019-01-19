"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./statements/_statement");
const Structures = require("./structures/");
const _statement_2 = require("./statements/_statement");
class StructureParser {
    static run(file) {
        const structure = this.findStructureForFile(file.getFilename());
        // todo, comments and empty statements will not be part of the structure
        // is this a problem?
        const statements = file.getStatements().slice().filter((s) => {
            return !(s.get() instanceof _statement_2.Comment || s.get() instanceof _statement_1.Empty);
        });
        const unknowns = file.getStatements().slice().filter((s) => { return s.get() instanceof _statement_1.Unknown; });
        if (unknowns.length > 0) {
            // do not parse structure, file contains unknown statements(parser errors)
            return { issues: [], node: undefined };
        }
        return structure.runFile(file, statements);
    }
    static findStructureForFile(filename) {
        // todo, not sure this is the right place for this logic
        if (filename.match(/\.clas\.abap$/)) {
            return new Structures.ClassGlobal();
        }
        else if (filename.match(/\.intf\.abap$/)) {
            return new Structures.Interface();
        }
        else {
            // todo
            return new Structures.Any();
        }
    }
}
exports.StructureParser = StructureParser;
