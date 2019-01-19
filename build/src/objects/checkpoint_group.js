"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
class CheckpointGroup extends _abstract_object_1.AbstractObject {
    getType() {
        return "ACID";
    }
}
exports.CheckpointGroup = CheckpointGroup;
