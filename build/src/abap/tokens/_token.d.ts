import { Position } from "../../position";
export declare abstract class Token {
    private pos;
    private str;
    constructor(pos: Position, str: string);
    getStr(): string;
    getRow(): number;
    getCol(): number;
    getPos(): Position;
}
