import { IObject } from "./objects/_iobject";
import { IFile } from "./files/_ifile";
import { ABAPObject } from "./objects/_abap_object";
import { ABAPFile } from "./files";
import { Config } from "./config";
import { Issue } from "./issue";
export interface IProgress {
    set(total: number, text: string): void;
    tick(info: any): void;
}
export declare class Registry {
    private dirty;
    private conf;
    private macros;
    private objects;
    private issues;
    constructor(conf?: Config);
    static abaplintVersion(): string;
    getObjects(): IObject[];
    getObject(type: string, name: string): IObject | undefined;
    getConfig(): Config;
    setConfig(conf: Config): void;
    getABAPObjects(): ABAPObject[];
    getABAPFiles(progress?: IProgress): ABAPFile[];
    getABAPFile(name: string): ABAPFile | undefined;
    addFile(file: IFile): Registry;
    updateFile(file: IFile): Registry;
    removeFile(file: IFile): Registry;
    addFiles(files: IFile[]): Registry;
    setDirty(): void;
    isDirty(): boolean;
    findObjectForFile(file: IFile): IObject | undefined;
    findIssuesFile(file: IFile): Issue[];
    findIssues(progress?: IProgress, iobj?: IObject): Issue[];
    private excludeIssues;
    parse(progress?: IProgress): Registry;
    addMacro(name: string): void;
    isMacro(name: string): boolean;
    private findOrCreate;
    private removeObject;
    private find;
}
