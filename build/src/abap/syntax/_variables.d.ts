import { TypedIdentifier } from "../types/_typed_identifier";
export declare class Variables {
    private scopes;
    constructor();
    add(identifier: TypedIdentifier): void;
    addOther(name: string): void;
    addList(identifiers: TypedIdentifier[]): void;
    getCurrentScope(): TypedIdentifier[];
    resolve(name: string): TypedIdentifier | string | undefined;
    getParentName(): string;
    pushScope(name: string): Variables;
    popScope(): void;
}
