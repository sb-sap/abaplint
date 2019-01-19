import { AbstractObject } from "./_abstract_object";
import { Message } from "../abap/types/message";
export declare class MessageClass extends AbstractObject {
    getType(): string;
    getMessages(): Message[];
    private parse;
    getByNumber(num: string): Message | undefined;
    private getXML;
}
