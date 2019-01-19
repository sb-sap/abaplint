"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Type} from "./type";
const _identifier_1 = require("./_identifier");
class TypedIdentifier extends _identifier_1.Identifier {
    //  private type: Type;
    constructor(token, node) {
        super(token, node);
    }
}
exports.TypedIdentifier = TypedIdentifier;
