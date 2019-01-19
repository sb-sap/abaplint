import { AbstractObject } from "./_abstract_object";
export declare class View extends AbstractObject {
    getType(): string;
    getFields(): string[];
    private parse;
    private getXML;
}
