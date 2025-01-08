---
title: MetadataFieldTypeValues
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.MetadataFieldTypeValues
order: 270
---

# Variable: MetadataFieldTypeValues

## Properties overview

- field: readonly field: {
  code: 5n;
  inputType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
  storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
}; [↗](#field)
- image: readonly image: {
  code: 3n;
  inputType: "string";
  storedType: typeof Text;
}; [↗](#image)
- map: readonly map: {
  code: 6n;
  inputType: typeof Metadata;
  storedType: typeof Metadata;
}; [↗](#map)
- string: readonly string: {
  code: 1n;
  inputType: "string";
  storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
}; [↗](#string)
- text: readonly text: {
  code: 2n;
  inputType: "string";
  storedType: typeof Text;
}; [↗](#text)
- tree: readonly tree: {
  code: 7n;
  inputType: typeof MetadataTree;
  storedType: typeof MetadataTree;
}; [↗](#tree)
- url: readonly url: {
  code: 4n;
  inputType: "string";
  storedType: typeof Text;
}; [↗](#url)

```ts
const MetadataFieldTypeValues: {
  field: {
     code: 5n;
     inputType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
     storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
    };
  image: {
     code: 3n;
     inputType: "string";
     storedType: typeof Text;
    };
  map: {
     code: 6n;
     inputType: typeof Metadata;
     storedType: typeof Metadata;
    };
  string: {
     code: 1n;
     inputType: "string";
     storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
    };
  text: {
     code: 2n;
     inputType: "string";
     storedType: typeof Text;
    };
  tree: {
     code: 7n;
     inputType: typeof MetadataTree;
     storedType: typeof MetadataTree;
    };
  url: {
     code: 4n;
     inputType: "string";
     storedType: typeof Text;
    };
};
```

Defined in: [packages/nft/src/metadata/metadata.ts:595](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L595)

Mapping of metadata field types to their code values and associated types.

## Type declaration

### field

```ts
readonly field: {
  code: 5n;
  inputType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
  storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
};
```

#### field.code

```ts
readonly code: 5n = 5n;
```

#### field.inputType

```ts
readonly inputType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field = Field;
```

#### field.storedType

```ts
readonly storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field = Field;
```

### image

```ts
readonly image: {
  code: 3n;
  inputType: "string";
  storedType: typeof Text;
};
```

#### image.code

```ts
readonly code: 3n = 3n;
```

#### image.inputType

```ts
readonly inputType: "string" = "string";
```

#### image.storedType

```ts
readonly storedType: typeof Text = Text;
```

### map

```ts
readonly map: {
  code: 6n;
  inputType: typeof Metadata;
  storedType: typeof Metadata;
};
```

#### map.code

```ts
readonly code: 6n = 6n;
```

#### map.inputType

```ts
readonly inputType: typeof Metadata = Metadata;
```

#### map.storedType

```ts
readonly storedType: typeof Metadata = Metadata;
```

### string

```ts
readonly string: {
  code: 1n;
  inputType: "string";
  storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
};
```

#### string.code

```ts
readonly code: 1n = 1n;
```

#### string.inputType

```ts
readonly inputType: "string" = "string";
```

#### string.storedType

```ts
readonly storedType: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field = Field;
```

### text

```ts
readonly text: {
  code: 2n;
  inputType: "string";
  storedType: typeof Text;
};
```

#### text.code

```ts
readonly code: 2n = 2n;
```

#### text.inputType

```ts
readonly inputType: "string" = "string";
```

#### text.storedType

```ts
readonly storedType: typeof Text = Text;
```

### tree

```ts
readonly tree: {
  code: 7n;
  inputType: typeof MetadataTree;
  storedType: typeof MetadataTree;
};
```

#### tree.code

```ts
readonly code: 7n = 7n;
```

#### tree.inputType

```ts
readonly inputType: typeof MetadataTree = MetadataTree;
```

#### tree.storedType

```ts
readonly storedType: typeof MetadataTree = MetadataTree;
```

### url

```ts
readonly url: {
  code: 4n;
  inputType: "string";
  storedType: typeof Text;
};
```

#### url.code

```ts
readonly code: 4n = 4n;
```

#### url.inputType

```ts
readonly inputType: "string" = "string";
```

#### url.storedType

```ts
readonly storedType: typeof Text = Text;
```
