export declare class Message {
    private num;
    private msg;
    constructor(num: string, msg: string);
    getNumber(): string;
    getMessage(): string;
    getPlaceholderCount(): number;
}
