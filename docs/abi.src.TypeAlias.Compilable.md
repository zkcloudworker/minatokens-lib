---
title: Compilable
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.TypeAlias.Compilable
order: 11
---

# Type Alias: Compilable

```ts
type Compilable = {
  compile: Promise<{
     verificationKey: {
        data: string;
        hash: Field;
       };
    }>;
};
```

## Type declaration

### compile()

#### Parameters

##### \_\_namedParameters?

###### cache

`Cache`

#### Returns

`Promise`\<\{
  `verificationKey`: \{
     `data`: `string`;
     `hash`: `Field`;
    \};
 \}\>

## Defined in

[packages/abi/src/token/contracts.ts:12](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/token/contracts.ts#L12)
