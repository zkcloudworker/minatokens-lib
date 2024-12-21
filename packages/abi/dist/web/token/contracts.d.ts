import { Cache, Field } from "o1js";
export type Compilable = {
    compile({ cache }?: {
        cache: Cache;
    }): Promise<{
        verificationKey: {
            data: string;
            hash: Field;
        };
    }>;
};
export declare const tokenContracts: Record<string, Compilable>;
export type CompileDependencies = Record<
/** Transaction type */
string, 
/** List of contract names */
string[]>;
