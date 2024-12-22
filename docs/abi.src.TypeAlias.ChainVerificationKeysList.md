---
title: ChainVerificationKeysList
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.TypeAlias.ChainVerificationKeysList
order: 10
---

# Type Alias: ChainVerificationKeysList

## Properties overview

- o1js:  string; [↗](#o1js)
- vk:  Record<string, {
  data: string;
  hash: string;
  type: "token" | "admin" | "upgrade" | "user";
}>; [↗](#vk)

```ts
type ChainVerificationKeysList = {
  o1js: string;
  vk: Record<string, {
     data: string;
     hash: string;
     type: "token" | "admin" | "upgrade" | "user";
    }>;
};
```

## Type declaration

### o1js

```ts
o1js: string;
```

### vk

```ts
vk: Record<string, {
  data: string;
  hash: string;
  type: "token" | "admin" | "upgrade" | "user";
}>;
```

## Defined in

[packages/abi/src/vk/types.ts:1](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/vk/types.ts#L1)
