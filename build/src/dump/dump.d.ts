import { Registry } from "../registry";
import * as Types from "../abap/types";
export declare class Dump {
    private reg;
    constructor(reg: Registry);
    classes(): object;
    methods(methods: Types.MethodDefinitions | undefined): any;
    parameter(param: Types.MethodParameter | undefined): any;
    parameters(parameters: Types.MethodParameters): any;
    classAtribute(attr: Types.ClassAttribute): any;
    attributes(attributes: Types.ClassAttributes | undefined): any;
}
