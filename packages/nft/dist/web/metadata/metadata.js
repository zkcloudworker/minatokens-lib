import { Field, Poseidon, Struct, Experimental } from "o1js";
import { fieldFromString } from "../interfaces/index.js";
import { Text } from "./text.js";
import { MetadataTree } from "./tree.js";
export { Metadata, MetadataMap, MetadataFieldTypeValues, MetadataValue, ColorPlugin, };
/**
 * The height of the metadata Merkle tree.
 */
const METADATA_HEIGHT = 20;
const IndexedMerkleMap = Experimental.IndexedMerkleMap;
/**
 * A specialized IndexedMerkleMap for storing metadata.
 */
class MetadataMap extends IndexedMerkleMap(METADATA_HEIGHT) {
}
/**
 * Represents a metadata value with its type and associated data.
 */
class MetadataValue extends Struct({
    value: Field,
    type: Field,
    length: Field,
    height: Field,
}) {
    /**
     * Creates a new MetadataValue instance.
     * @param params - The parameters including value and type.
     * @returns A new MetadataValue.
     */
    static new(params) {
        const { value, type } = params;
        let valueField;
        let length = Field(0);
        let height = Field(0);
        switch (type) {
            case "string":
                if (!(value instanceof Field))
                    throw new Error(`Invalid value type`);
                valueField = value;
                break;
            case "text":
            case "image":
            case "url":
                if (!(value instanceof Text))
                    throw new Error(`Invalid value type`);
                valueField = value.root;
                length = Field(value.size);
                height = Field(value.height);
                break;
            case "field":
                if (!(value instanceof Field))
                    throw new Error(`Invalid value type`);
                valueField = value;
                break;
            case "map":
                if (!(value instanceof Metadata))
                    throw new Error(`Invalid value type`);
                valueField = value.map.root;
                length = Field(value.map.length);
                height = Field(value.map.height);
                break;
            case "tree":
                if (!(value instanceof MetadataTree))
                    throw new Error(`Invalid value type`);
                valueField = value.root;
                length = Field(value.values.length);
                height = Field(value.height);
                break;
            default:
                throw new Error(`Unknown value type`);
        }
        return new MetadataValue({
            value: valueField,
            type: Field(MetadataFieldTypeValues[type].code),
            length,
            height,
        });
    }
    /**
     * Computes the Poseidon hash of the metadata value.
     * @returns The hash as a Field.
     */
    hash() {
        return Poseidon.hash(MetadataValue.toFields(this));
    }
}
/**
 * Abstract class for creating custom metadata plugins.
 */
class MetadataPlugin {
}
/**
 * A plugin for handling color metadata.
 */
class ColorPlugin extends MetadataPlugin {
    constructor() {
        super(...arguments);
        /**
         * The name of the plugin.
         */
        this.name = "color";
    }
    /**
     * Converts a color name or value into its numeric representation.
     * @param value - The color value (name, string, or number).
     * @returns The numeric representation of the color.
     */
    getColor(value) {
        if (typeof value === "string" &&
            ["blue", "red", "green", "yellow", "purple", "orange", "pink"].includes(value)) {
            const colors = {
                blue: 0x0000ff,
                red: 0xff0000,
                green: 0x00ff00,
                yellow: 0xffff00,
                purple: 0x800080,
                orange: 0xffa500,
                pink: 0xffc0cb,
            };
            return colors[value];
        }
        else if (typeof value === "number") {
            return value;
        }
        else if (typeof value === "string") {
            try {
                // parse hex color like #0000ff
                return parseInt(value.slice(1), 16);
            }
            catch (e) {
                throw new Error("Invalid color value");
            }
        }
        throw new Error("Invalid color value");
    }
    /**
     * Retrieves the trait representation of the color value.
     * @param params - The parameters including key, type, and value.
     * @returns An object containing the key, value, and canonical representation.
     */
    getTrait(params) {
        const { key, value } = params;
        const color = this.getColor(value);
        return {
            key: fieldFromString(key),
            value: new MetadataValue({
                value: Field(color),
                type: Field(10),
                length: Field(0),
                height: Field(0),
            }),
            canonicalRepresentation: color,
        };
    }
    /**
     * Converts the color value to a JSON string.
     * @param value - The color value.
     * @returns The JSON string representation.
     */
    toJSON(value) {
        return this.getColor(value).toString(16);
    }
    /**
     * Parses the color value from a JSON string or object.
     * @param value - The JSON value.
     * @returns The numeric representation of the color.
     */
    fromJSON(value) {
        if (typeof value !== "string")
            throw new Error("Invalid color value");
        return this.getColor(parseInt(value, 16));
    }
}
/**
 * Represents the metadata for an NFT, including traits and associated data.
 */
class Metadata {
    /**
     * Creates a new Metadata instance.
     * @param params - The parameters for the metadata, including name, image, description, banner, and plugins.
     */
    constructor(params) {
        /**
         * Object containing the traits of the NFT.
         */
        this.traits = {};
        const { name, description, image, banner, plugins } = params;
        this.plugins = plugins ?? [];
        this.map = new MetadataMap();
        this.addTrait({
            key: "name",
            type: "string",
            value: name,
        });
        this.addTrait({
            key: "image",
            type: "image",
            value: image,
        });
        if (description) {
            this.addTrait({
                key: "description",
                type: "text",
                value: description,
            });
        }
        if (banner) {
            this.addTrait({
                key: "banner",
                type: "image",
                value: banner,
            });
        }
        this.name = name;
        this.image = image;
        this.banner = banner;
        this.description = description;
    }
    /**
     * Adds a trait to the metadata.
     * @param params - The parameters including key, type, value, and isPrivate.
     * @returns An object containing the key and the metadata value.
     */
    addTrait(params) {
        const { key, type, value, isPrivate = false } = params;
        let keyField = fieldFromString(key);
        let metadataValue;
        let canonicalRepresentation = value;
        if (type in MetadataFieldTypeValues) {
            let valueObject;
            switch (type) {
                case "string":
                    if (typeof value !== "string")
                        throw new Error(`Invalid trait value type`);
                    valueObject = fieldFromString(value);
                    break;
                case "text":
                case "image":
                case "url":
                    if (typeof value !== "string")
                        throw new Error(`Invalid trait value type`);
                    valueObject = new Text(value);
                    break;
                case "field":
                    if (!(value instanceof Field))
                        throw new Error(`Invalid trait value type`);
                    valueObject = value;
                    break;
                case "map":
                    if (!(value instanceof Metadata))
                        throw new Error(`Invalid trait value type`);
                    valueObject = value;
                    break;
                case "tree":
                    if (!(value instanceof MetadataTree))
                        throw new Error(`Invalid trait value type`);
                    valueObject = value;
                    break;
                default:
                    throw new Error(`Unknown trait value type - internal error`);
            }
            metadataValue = MetadataValue.new({ value: valueObject, type });
        }
        else {
            const index = this.plugins.findIndex((plugin) => plugin.name === type);
            if (index !== -1) {
                const plugin = this.plugins[index];
                const pluginTrait = plugin.getTrait({ key, type, value, isPrivate });
                metadataValue = pluginTrait.value;
                keyField = pluginTrait.key;
                canonicalRepresentation = pluginTrait.canonicalRepresentation;
            }
            else
                throw new Error(`Unknown trait type`);
        }
        this.map.set(keyField, metadataValue.hash());
        this.traits[key] = { type, value: canonicalRepresentation, isPrivate };
        return { key: keyField, value: metadataValue };
    }
    /**
     * Converts the metadata to a JSON representation.
     * @param includePrivateTraits - Whether to include private traits.
     * @returns The JSON representation of the metadata.
     */
    toJSON(includePrivateTraits = false) {
        return {
            name: this.name,
            description: this.description,
            image: this.image,
            banner: this.banner,
            metadataRoot: this.map.root.toJSON(),
            traits: Object.entries(this.traits)
                .filter(([_, { isPrivate }]) => includePrivateTraits || !isPrivate)
                .map(([key, { type, value, isPrivate }]) => {
                let jsonValue;
                switch (type) {
                    case "string":
                    case "text":
                    case "image":
                    case "url":
                        if (typeof value !== "string")
                            throw new Error(`Invalid trait value type`);
                        jsonValue = value;
                        break;
                    case "field":
                        if (!(value instanceof Field))
                            throw new Error(`Invalid trait value type`);
                        jsonValue = value.toJSON();
                        break;
                    case "map":
                        if (!(value instanceof Metadata))
                            throw new Error(`Invalid trait value type`);
                        jsonValue = value.toJSON(includePrivateTraits);
                        break;
                    case "tree":
                        if (!(value instanceof MetadataTree))
                            throw new Error(`Invalid trait value type`);
                        jsonValue = value.toJSON();
                        break;
                    default:
                        const plugin = this.plugins.find((plugin) => plugin.name === type);
                        if (!plugin)
                            throw new Error(`Unknown trait type`);
                        jsonValue = plugin.toJSON(value);
                }
                return {
                    key,
                    type,
                    ...(isPrivate ? { isPrivate } : {}),
                    value: jsonValue,
                };
            }),
        };
    }
    /**
     * Constructs a Metadata instance from JSON data.
     * @param params - The parameters including json data, checkRoot flag, and plugins.
     * @returns A new Metadata instance.
     */
    static fromJSON(params) {
        const { json, checkRoot = false, plugins } = params;
        const { name, description, image, banner, metadataRoot, traits } = json;
        if (!name)
            throw new Error(`Metadata name is required`);
        if (typeof name !== "string")
            throw new Error(`Invalid metadata name`);
        if (!image || typeof image !== "string")
            throw new Error(`Invalid metadata image`);
        if (description && typeof description !== "string")
            throw new Error(`Invalid metadata description`);
        if (banner && typeof banner !== "string")
            throw new Error(`Invalid metadata banner`);
        if (!metadataRoot || typeof metadataRoot !== "string")
            throw new Error(`Invalid metadata root`);
        if (!traits || !Array.isArray(traits))
            throw new Error(`Metadata traits are required`);
        for (const { key, type, value, isPrivate } of traits) {
            if (!key || typeof key !== "string")
                throw new Error(`Invalid trait key`);
            if (!type || typeof type !== "string")
                throw new Error(`Invalid trait type`);
            if (!value || (typeof value !== "string" && typeof value !== "object"))
                throw new Error(`Invalid trait value`);
            if (isPrivate && typeof isPrivate !== "boolean")
                throw new Error(`Invalid trait isPrivate`);
        }
        const metadata = new Metadata({
            name,
            description,
            image,
            banner,
            plugins,
        });
        for (const { key, type, value, isPrivate } of traits) {
            let valueField;
            switch (type) {
                case "string":
                case "text":
                case "image":
                case "url":
                    if (typeof value !== "string")
                        throw new Error(`Invalid trait value type`);
                    valueField = value;
                    break;
                case "field":
                    if (typeof value !== "string")
                        throw new Error(`Invalid trait value type`);
                    valueField = Field.fromJSON(value);
                    break;
                case "map":
                    if (typeof value !== "object")
                        throw new Error(`Invalid trait value type`);
                    valueField = Metadata.fromJSON({
                        json: value,
                        checkRoot,
                    });
                    break;
                case "tree":
                    if (typeof value !== "object")
                        throw new Error(`Invalid trait value type`);
                    valueField = MetadataTree.fromJSON(value);
                    break;
                default:
                    const plugin = metadata.plugins.find((plugin) => plugin.name === type);
                    if (!plugin)
                        throw new Error(`Unknown trait type`);
                    valueField = plugin.fromJSON(value);
            }
            metadata.addTrait({
                key,
                type,
                value: valueField,
                isPrivate: isPrivate ?? false,
            });
        }
        if (checkRoot === true && metadata.map.root.toJSON() !== metadataRoot) {
            throw new Error(`Invalid metadata root:${JSON.stringify({
                params,
                root: metadata.map.root.toJSON(),
                checkRoot,
                metadata: metadata.toJSON(true),
            }, null, 2)}`);
        }
        return metadata;
    }
}
/**
 * Mapping of metadata field types to their code values and associated types.
 */
const MetadataFieldTypeValues = {
    string: { code: 1n, inputType: "string", storedType: Field }, // Field
    text: { code: 2n, inputType: "string", storedType: Text }, // Text
    image: { code: 3n, inputType: "string", storedType: Text }, // Text
    url: { code: 4n, inputType: "string", storedType: Text }, // Text
    field: { code: 5n, inputType: Field, storedType: Field }, // Field
    map: { code: 6n, inputType: Metadata, storedType: Metadata }, // Metadata
    tree: { code: 7n, inputType: MetadataTree, storedType: MetadataTree }, // MetadataTree
};
//# sourceMappingURL=metadata.js.map