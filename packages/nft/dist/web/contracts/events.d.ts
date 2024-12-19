import { PublicKey, UInt64, UInt32, Field, Bool } from "o1js";
import { Storage } from "@minatokens/storage";
import { NFTStateStruct } from "./types.js";
export { MintEvent, UpdateEvent, TransferEvent, OfferEvent, SaleEvent, BuyEvent, UpgradeVerificationKeyEvent, LimitMintingEvent, PauseNFTEvent, };
declare const MintEvent_base: (new (value: {
    initialState: NFTStateStruct;
    address: PublicKey;
}) => {
    initialState: NFTStateStruct;
    address: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    initialState: NFTStateStruct;
    address: PublicKey;
}, {
    initialState: {
        name: bigint;
        metadata: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        storage: {
            url: bigint[];
        };
        packedData: bigint;
        metadataVerificationKeyHash: bigint;
    };
    address: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        initialState: NFTStateStruct;
        address: PublicKey;
    };
} & {
    fromValue: (value: {
        initialState: NFTStateStruct | {
            name: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            metadata: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            owner: PublicKey | {
                x: Field | bigint;
                isOdd: Bool | boolean;
            };
            storage: Storage | {
                url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
            };
            packedData: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            metadataVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        };
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        initialState: NFTStateStruct;
        address: PublicKey;
    };
    toInput: (x: {
        initialState: NFTStateStruct;
        address: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        initialState: NFTStateStruct;
        address: PublicKey;
    }) => {
        initialState: {
            name: string;
            metadata: string;
            owner: string;
            storage: {
                url: string[];
            };
            packedData: string;
            metadataVerificationKeyHash: string;
        };
        address: string;
    };
    fromJSON: (x: {
        initialState: {
            name: string;
            metadata: string;
            owner: string;
            storage: {
                url: string[];
            };
            packedData: string;
            metadataVerificationKeyHash: string;
        };
        address: string;
    }) => {
        initialState: NFTStateStruct;
        address: PublicKey;
    };
    empty: () => {
        initialState: NFTStateStruct;
        address: PublicKey;
    };
};
/**
 * Emitted when a new NFT is minted in the collection.
 */
declare class MintEvent extends MintEvent_base {
}
declare const UpdateEvent_base: (new (value: {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    name: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
    version: bigint;
    isPaused: boolean;
    metadataVerificationKeyHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        name: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
        owner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
        version: bigint | UInt32;
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: string;
        metadata: string;
        storage: {
            url: string[];
        };
        owner: string;
        price: string;
        version: string;
        isPaused: boolean;
        metadataVerificationKeyHash: string;
    };
    fromJSON: (x: {
        name: string;
        metadata: string;
        storage: {
            url: string[];
        };
        owner: string;
        price: string;
        version: string;
        isPaused: boolean;
        metadataVerificationKeyHash: string;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Emitted when an NFT's state is updated.
 */
declare class UpdateEvent extends UpdateEvent_base {
}
declare const TransferEvent_base: (new (value: {
    from: PublicKey;
    to: PublicKey;
    address: PublicKey;
}) => {
    from: PublicKey;
    to: PublicKey;
    address: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    from: PublicKey;
    to: PublicKey;
    address: PublicKey;
}, {
    from: {
        x: bigint;
        isOdd: boolean;
    };
    to: {
        x: bigint;
        isOdd: boolean;
    };
    address: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    };
} & {
    fromValue: (value: {
        from: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        to: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    };
    toInput: (x: {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    }) => {
        from: string;
        to: string;
        address: string;
    };
    fromJSON: (x: {
        from: string;
        to: string;
        address: string;
    }) => {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    };
    empty: () => {
        from: PublicKey;
        to: PublicKey;
        address: PublicKey;
    };
};
/**
 * Emitted when an NFT is transferred from one owner to another.
 */
declare class TransferEvent extends TransferEvent_base {
}
declare const PauseNFTEvent_base: (new (value: {
    address: PublicKey;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    address: PublicKey;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    address: PublicKey;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    address: {
        x: bigint;
        isOdd: boolean;
    };
    isPaused: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        address: string;
        isPaused: boolean;
    };
    fromJSON: (x: {
        address: string;
        isPaused: boolean;
    }) => {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        address: PublicKey;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Emitted when an NFT is paused or resumed.
 */
declare class PauseNFTEvent extends PauseNFTEvent_base {
}
declare const OfferEvent_base: (new (value: {
    seller: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}) => {
    seller: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    seller: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}, {
    seller: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    version: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
} & {
    fromValue: (value: {
        seller: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        version: bigint | UInt32;
    }) => {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
    toInput: (x: {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    }) => {
        seller: string;
        price: string;
        address: string;
        version: string;
    };
    fromJSON: (x: {
        seller: string;
        price: string;
        address: string;
        version: string;
    }) => {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
    empty: () => {
        seller: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
};
/**
 * Emitted when an NFT is listed for sale.
 */
declare class OfferEvent extends OfferEvent_base {
}
declare const SaleEvent_base: (new (value: {
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
}) => {
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
}, {
    seller: {
        x: bigint;
        isOdd: boolean;
    };
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    };
} & {
    fromValue: (value: {
        seller: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    };
    toInput: (x: {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    }) => {
        seller: string;
        buyer: string;
        price: string;
        address: string;
    };
    fromJSON: (x: {
        seller: string;
        buyer: string;
        price: string;
        address: string;
    }) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    };
    empty: () => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
    };
};
/**
 * Emitted when an NFT is sold to a buyer
 */
declare class SaleEvent extends SaleEvent_base {
}
declare const BuyEvent_base: (new (value: {
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}) => {
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    seller: PublicKey;
    buyer: PublicKey;
    price: UInt64;
    address: PublicKey;
    version: UInt32;
}, {
    seller: {
        x: bigint;
        isOdd: boolean;
    };
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    version: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
} & {
    fromValue: (value: {
        seller: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        version: bigint | UInt32;
    }) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
    toInput: (x: {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    }) => {
        seller: string;
        buyer: string;
        price: string;
        address: string;
        version: string;
    };
    fromJSON: (x: {
        seller: string;
        buyer: string;
        price: string;
        address: string;
        version: string;
    }) => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
    empty: () => {
        seller: PublicKey;
        buyer: PublicKey;
        price: UInt64;
        address: PublicKey;
        version: UInt32;
    };
};
/**
 * Emitted when an NFT is purchased.
 */
declare class BuyEvent extends BuyEvent_base {
}
declare const UpgradeVerificationKeyEvent_base: (new (value: {
    verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    version: UInt32;
}) => {
    verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    version: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    version: UInt32;
}, {
    verificationKeyHash: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    version: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    };
} & {
    fromValue: (value: {
        verificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        version: bigint | UInt32;
    }) => {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    };
    toInput: (x: {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    }) => {
        verificationKeyHash: string;
        address: string;
        version: string;
    };
    fromJSON: (x: {
        verificationKeyHash: string;
        address: string;
        version: string;
    }) => {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    };
    empty: () => {
        verificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        version: UInt32;
    };
};
/**
 * Emitted when the verification key of an NFT is upgraded.
 */
declare class UpgradeVerificationKeyEvent extends UpgradeVerificationKeyEvent_base {
}
declare const LimitMintingEvent_base: (new (value: {
    mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    mintingLimited: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        mintingLimited: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        mintingLimited: boolean;
    };
    fromJSON: (x: {
        mintingLimited: boolean;
    }) => {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        mintingLimited: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Emitted when minting of new NFTs is limited in the collection.
 */
declare class LimitMintingEvent extends LimitMintingEvent_base {
}
