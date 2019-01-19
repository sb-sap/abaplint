"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
class MaintenanceAndTransportObject extends _abstract_object_1.AbstractObject {
    getType() {
        return "TOBJ";
    }
    getArea() {
        if (this.getFiles().length === 0) {
            return undefined;
        }
        const xml = this.getFiles()[0].getRaw();
        const result = xml.match(/<AREA>(\w+)<\/AREA>/);
        if (result) {
            return result[1];
        }
        else {
            return undefined;
        }
    }
}
exports.MaintenanceAndTransportObject = MaintenanceAndTransportObject;
