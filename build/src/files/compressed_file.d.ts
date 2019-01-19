import { AbstractFile } from "./_abstract_file";
export declare class CompressedFile extends AbstractFile {
    private compressed;
    constructor(filename: string, compressed: string);
    getRaw(): string;
    getRawRows(): string[];
    private decompress;
}
