import { ABAPObject } from "./_abap_object";
import { ClassDefinition } from "../abap/types/class_definition";
export declare enum ClassCategory {
    Test = "05",
    Persistent = "10",
    PersistentFactory = "11",
    Exception = "40",
    SharedObject = "45"
}
export declare class Class extends ABAPObject {
    getType(): string;
    getClassDefinition(): ClassDefinition | undefined;
    getDescription(): string;
    getCategory(): string | undefined;
    private getMainABAP;
    private getXML;
}
