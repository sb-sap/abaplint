import { IStructureRunnable } from "./_combi";
import { StructureNode, StatementNode } from "../nodes/";
import { Issue } from "../../issue";
import { ABAPFile } from "../../files";
export declare abstract class Structure {
    abstract getMatcher(): IStructureRunnable;
    runFile(file: ABAPFile, statements?: StatementNode[]): {
        issues: Issue[];
        node?: StructureNode;
    };
}
