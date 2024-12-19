import { Cache, Field } from "o1js";
export { tokenContracts };
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
declare const tokenContracts: {
    [key: string]: Compilable;
};
