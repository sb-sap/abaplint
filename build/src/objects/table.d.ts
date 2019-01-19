import { AbstractObject } from "./_abstract_object";
export declare class Table extends AbstractObject {
    getType(): string;
    getFields(): string[];
    private parse;
    private getXML;
}
