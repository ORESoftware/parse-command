export declare const parseCommandp: (cmd: string) => Promise<string[]>;
export declare type ErrValCallback = (err: null | Error, val?: Array<string>) => void;
export declare const parseCommand: (cmd: string, cb: ErrValCallback) => void;
