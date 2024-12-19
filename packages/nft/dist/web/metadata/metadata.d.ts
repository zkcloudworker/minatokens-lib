import { Field } from "o1js";
import { Text } from "./text.js";
import { MetadataTree } from "./tree.js";
export { Metadata, MetadataMap, MetadataFieldType, MetadataFieldTypeValues, MetadataValue, ColorPlugin, };
declare const MetadataMap_base: typeof import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
/**
 * A specialized IndexedMerkleMap for storing metadata.
 */
declare class MetadataMap extends MetadataMap_base {
}
/**
 * The possible types for metadata fields.
 */
type MetadataFieldType = "string" | "text" | "image" | "url" | "field" | "map" | "tree";
declare const MetadataValue_base: (new (value: {
    value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    value: bigint;
    type: bigint;
    length: bigint;
    height: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        value: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        value: string;
        type: string;
        length: string;
        height: string;
    };
    fromJSON: (x: {
        value: string;
        type: string;
        length: string;
        height: string;
    }) => {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        type: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        length: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        height: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents a metadata value with its type and associated data.
 */
declare class MetadataValue extends MetadataValue_base {
    /**
     * Creates a new MetadataValue instance.
     * @param params - The parameters including value and type.
     * @returns A new MetadataValue.
     */
    static new(params: {
        value: Field | Text | Metadata | MetadataTree;
        type: MetadataFieldType;
    }): MetadataValue;
    /**
     * Computes the Poseidon hash of the metadata value.
     * @returns The hash as a Field.
     */
    hash(): Field;
}
/**
 * Abstract class for creating custom metadata plugins.
 */
declare abstract class MetadataPlugin {
    /**
     * The name of the plugin.
     */
    readonly name: string;
    /**
     * Retrieves the trait representation of the metadata value.
     * @param params - The parameters including key, type, value, and isPrivate.
     * @returns An object containing the key, value, and canonical representation.
     */
    abstract getTrait(params: {
        key: string;
        type: string;
        value: unknown;
        isPrivate?: boolean;
    }): {
        key: Field;
        value: MetadataValue;
        canonicalRepresentation: unknown;
    };
    /**
     * Converts the value to JSON.
     * @param value - The value to convert.
     * @returns The JSON representation.
     */
    abstract toJSON(value: unknown): string | object;
    /**
     * Parses the value from JSON.
     * @param value - The JSON value to parse.
     * @returns The parsed value.
     */
    abstract fromJSON(value: string | object): unknown;
}
/**
 * Type representing color values.
 */
type Color = "blue" | "red" | "green" | "yellow" | "purple" | "orange" | "pink";
/**
 * A plugin for handling color metadata.
 */
declare class ColorPlugin extends MetadataPlugin {
    /**
     * The name of the plugin.
     */
    readonly name = "color";
    /**
     * Converts a color name or value into its numeric representation.
     * @param value - The color value (name, string, or number).
     * @returns The numeric representation of the color.
     */
    getColor(value: Color | string | number): number;
    /**
     * Retrieves the trait representation of the color value.
     * @param params - The parameters including key, type, and value.
     * @returns An object containing the key, value, and canonical representation.
     */
    getTrait(params: {
        key: string;
        type: string;
        value: Color | string | number;
    }): {
        key: Field;
        value: MetadataValue;
        canonicalRepresentation: number;
    };
    /**
     * Converts the color value to a JSON string.
     * @param value - The color value.
     * @returns The JSON string representation.
     */
    toJSON(value: Color | string | number): string;
    /**
     * Parses the color value from a JSON string or object.
     * @param value - The JSON value.
     * @returns The numeric representation of the color.
     */
    fromJSON(value: string | object): number;
}
/**
 * Represents the metadata for an NFT, including traits and associated data.
 */
declare class Metadata {
    /**
     * The underlying map storing the metadata key-value pairs.
     */
    readonly map: MetadataMap;
    /**
     * The name of the NFT.
     */
    readonly name: string;
    /**
     * The image associated with the NFT.
     */
    image: string;
    /**
     * Optional banner image for the NFT.
     */
    banner?: string;
    /**
     * Optional description of the NFT.
     */
    description?: string;
    /**
     * Array of metadata plugins used for custom traits.
     */
    plugins: MetadataPlugin[];
    /**
     * Object containing the traits of the NFT.
     */
    traits: {
        [key: string]: {
            type: string;
            value: string | Field | Metadata | MetadataTree | unknown;
            isPrivate: boolean;
        };
    };
    /**
     * Creates a new Metadata instance.
     * @param params - The parameters for the metadata, including name, image, description, banner, and plugins.
     */
    constructor(params: {
        name: string;
        image: string;
        description?: string;
        banner?: string;
        plugins?: MetadataPlugin[];
    });
    /**
     * Adds a trait to the metadata.
     * @param params - The parameters including key, type, value, and isPrivate.
     * @returns An object containing the key and the metadata value.
     */
    addTrait(params: {
        key: string;
        type: string;
        value: string | Field | Metadata | MetadataTree | unknown;
        isPrivate?: boolean;
    }): {
        key: Field;
        value: MetadataValue;
    };
    /**
     * Converts the metadata to a JSON representation.
     * @param includePrivateTraits - Whether to include private traits.
     * @returns The JSON representation of the metadata.
     */
    toJSON(includePrivateTraits?: boolean): {
        name: string;
        image: string;
        description?: string;
        banner?: string;
        metadataRoot: string;
        traits: {
            key: string;
            type: string;
            value: string | object;
            isPrivate?: boolean;
        }[];
    };
    /**
     * Constructs a Metadata instance from JSON data.
     * @param params - The parameters including json data, checkRoot flag, and plugins.
     * @returns A new Metadata instance.
     */
    static fromJSON(params: {
        json: {
            name: string;
            image: string;
            description?: string;
            banner?: string;
            metadataRoot: string;
            traits: {
                key: string;
                type: string;
                value: string | object;
                isPrivate?: boolean;
            }[];
        };
        checkRoot?: boolean;
        plugins?: MetadataPlugin[];
    }): Metadata;
}
/**
 * Mapping of metadata field types to their code values and associated types.
 */
declare const MetadataFieldTypeValues: {
    readonly string: {
        readonly code: 1n;
        readonly inputType: "string";
        readonly storedType: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
    };
    readonly text: {
        readonly code: 2n;
        readonly inputType: "string";
        readonly storedType: typeof Text;
    };
    readonly image: {
        readonly code: 3n;
        readonly inputType: "string";
        readonly storedType: typeof Text;
    };
    readonly url: {
        readonly code: 4n;
        readonly inputType: "string";
        readonly storedType: typeof Text;
    };
    readonly field: {
        readonly code: 5n;
        readonly inputType: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
        readonly storedType: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
    };
    readonly map: {
        readonly code: 6n;
        readonly inputType: typeof Metadata;
        readonly storedType: typeof Metadata;
    };
    readonly tree: {
        readonly code: 7n;
        readonly inputType: typeof MetadataTree;
        readonly storedType: typeof MetadataTree;
    };
};
