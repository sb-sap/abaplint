import { IRule } from "./rules/_irule";
import { IObject } from "./objects/_iobject";
export declare class Artifacts {
    private static objectMap;
    static getRules(): IRule[];
    static newObject(name: string, type: string): IObject;
    private static buildObjectMap;
}
