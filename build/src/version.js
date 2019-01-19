"use strict";
// todo, refactor, this can be done smarter somehow?
Object.defineProperty(exports, "__esModule", { value: true });
var Version;
(function (Version) {
    Version[Version["v700"] = 0] = "v700";
    Version[Version["v702"] = 1] = "v702";
    Version[Version["v740sp02"] = 2] = "v740sp02";
    Version[Version["v740sp05"] = 3] = "v740sp05";
    Version[Version["v740sp08"] = 4] = "v740sp08";
    Version[Version["v750"] = 5] = "v750";
    Version[Version["v751"] = 6] = "v751";
    Version[Version["v752"] = 7] = "v752";
    Version[Version["v753"] = 8] = "v753";
    Version[Version["Cloud"] = 9] = "Cloud";
})(Version = exports.Version || (exports.Version = {}));
function versionToText(v) {
    switch (v) {
        case Version.v700:
            return "v700";
        case Version.v702:
            return "v702";
        case Version.v740sp02:
            return "v740sp02";
        case Version.v740sp05:
            return "v740sp05";
        case Version.v740sp08:
            return "v740sp08";
        case Version.v750:
            return "v750";
        case Version.v751:
            return "v751";
        case Version.v752:
            return "v752";
        case Version.v753:
            return "v753";
        case Version.Cloud:
            return "Cloud";
        default:
            throw "Unknown version: " + v;
    }
}
exports.versionToText = versionToText;
function textToVersion(s) {
    switch (s) {
        case "v700":
            return Version.v700;
        case "v702":
            return Version.v702;
        case "v740sp02":
            return Version.v740sp02;
        case "v740sp05":
            return Version.v740sp05;
        case "v740sp08":
            return Version.v740sp08;
        case "v750":
            return Version.v750;
        case "v751":
            return Version.v751;
        case "v752":
            return Version.v752;
        case "v753":
            return Version.v753;
        case "Cloud":
            return Version.Cloud;
        default:
            throw "Unknown version: " + s;
    }
}
exports.textToVersion = textToVersion;
