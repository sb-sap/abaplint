import { IFile } from "../files/_ifile";
import { IObject } from "./_iobject";
export declare abstract class AbstractObject implements IObject {
    protected files: IFile[];
    private name;
    protected dirty: boolean;
    abstract getType(): string;
    constructor(name: string);
    getName(): string;
    setDirty(): void;
    addFile(file: IFile): void;
    getFiles(): IFile[];
    removeFile(file: IFile): void;
    isDirty(): boolean;
    updateFile(file: IFile): void;
}
