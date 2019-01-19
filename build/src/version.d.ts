export declare enum Version {
    v700 = 0,
    v702 = 1,
    v740sp02 = 2,
    v740sp05 = 3,
    v740sp08 = 4,
    v750 = 5,
    v751 = 6,
    v752 = 7,
    v753 = 8,
    Cloud = 9
}
export declare function versionToText(v: Version): string;
export declare function textToVersion(s: string): Version;
