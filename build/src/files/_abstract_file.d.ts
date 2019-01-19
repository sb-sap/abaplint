import { IFile } from "./_ifile";
export declare abstract class AbstractFile implements IFile {
    private filename;
    constructor(filename: string);
    getFilename(): string;
    getObjectType(): string;
    getObjectName(): string;
    abstract getRaw(): string;
    abstract getRawRows(): string[];
}
