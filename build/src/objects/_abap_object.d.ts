import { AbstractObject } from "./_abstract_object";
import { ABAPFile } from "../files";
import { Version } from "../version";
import { Registry } from "../registry";
import { Issue } from "../issue";
export declare abstract class ABAPObject extends AbstractObject {
    private parsed;
    private old;
    constructor(name: string);
    private shouldParse;
    parseFirstPass(ver: Version, reg: Registry): void;
    parseSecondPass(reg: Registry): Issue[];
    getABAPFiles(): ABAPFile[];
    private tokensToNodes;
}
