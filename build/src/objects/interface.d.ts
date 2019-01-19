import { ABAPObject } from "./_abap_object";
import { InterfaceDefinition } from "../abap/types";
export declare class Interface extends ABAPObject {
    getType(): string;
    getDefinition(): InterfaceDefinition | undefined;
    private getMain;
}
