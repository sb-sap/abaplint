import { IRule } from "./_irule";
import { IObject } from "../objects/_iobject";
import { Issue } from "../issue";
import { ABAPFile } from "../files";
import { Registry } from "../registry";
export declare abstract class ABAPRule implements IRule {
    abstract getKey(): string;
    abstract getDescription(): string;
    abstract getConfig(): void;
    abstract setConfig(conf: any): void;
    abstract runParsed(file: ABAPFile, reg: Registry, obj: IObject): Issue[];
    run(obj: IObject, reg: Registry): Issue[];
}
