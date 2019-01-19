import { ABAPFile } from "../files";
import { Issue } from "../issue";
import { StructureNode } from "./nodes/";
export declare class StructureParser {
    static run(file: ABAPFile): {
        issues: Issue[];
        node?: StructureNode;
    };
    private static findStructureForFile;
}
