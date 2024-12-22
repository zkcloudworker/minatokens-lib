---
title: PublicKeyOption
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.PublicKeyOption
order: 287
---

# Class: PublicKeyOption

An optional `PublicKey` type, used to specify the next upgrade authority if needed.
This is crucial when the current upgrade authority cannot be used in future upgrades
due to changes in the o1js version or other factors.

## Extends

- `Option`\<`PublicKey`, \{\}\>

## Constructors

### new PublicKeyOption()

```ts
new PublicKeyOption(option: {}): PublicKeyOption
```

#### Parameters

##### option

#### Returns

[`PublicKeyOption`](upgradablesrcclasspublickeyoption)

#### Inherited from

`Option(PublicKey).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/option.d.ts:35
