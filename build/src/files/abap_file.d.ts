import { Token } from "../abap/tokens/_token";
import { AbstractFile } from "./_abstract_file";
import { IFile } from "./_ifile";
import { StructureNode, StatementNode } from "../abap/nodes/";
import { ClassDefinition, ClassImplementation, InterfaceDefinition, FormDefinition } from "../abap/types";
export declare class ABAPFile extends AbstractFile {
    private tokens;
    private statements;
    private structure;
    private file;
    constructor(file: IFile, tokens: Token[], statements: StatementNode[]);
    getRaw(): string;
    getRawRows(): string[];
    setStructure(node?: StructureNode): void;
    getStructure(): StructureNode | undefined;
    getTokens(withPragmas?: boolean): Token[];
    getStatements(): StatementNode[];
    setStatements(s: StatementNode[]): void;
    getInterfaceDefinitions(): InterfaceDefinition[];
    getClassDefinitions(): ClassDefinition[];
    getClassDefinition(name: string): ClassDefinition | undefined;
    getClassImplementations(): ClassImplementation[];
    getFormDefinitions(): FormDefinition[];
    getFormDefinition(name: string): FormDefinition | undefined;
}
