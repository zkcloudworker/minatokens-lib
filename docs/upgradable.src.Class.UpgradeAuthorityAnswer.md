---
title: UpgradeAuthorityAnswer
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.UpgradeAuthorityAnswer
order: 346
---

# Class: UpgradeAuthorityAnswer

## Properties overview

- isVerified:  Bool = Bool; [↗](#isverified)
- nextUpgradeAuthority:  PublicKeyOption = PublicKeyOption; [↗](#nextupgradeauthority)

Defined in: [packages/upgradable/src/upgradable.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L58)

Represents the response from the upgrade authority after verifying the upgrade data.
It contains the next upgrade authority's public key if a change is required, and a boolean
indicating whether the upgrade data has been successfully verified.

## Extends

- \{
  `isVerified`: `Bool`;
  `nextUpgradeAuthority`: [`PublicKeyOption`](upgradablesrcclasspublickeyoption);
 \}

## Constructors

### new UpgradeAuthorityAnswer()

```ts
new UpgradeAuthorityAnswer(value: {
  isVerified: Bool;
  nextUpgradeAuthority: PublicKeyOption;
 }): UpgradeAuthorityAnswer
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isVerified

`Bool` = `Bool`

Indicates whether the upgrade data has been successfully verified.

###### nextUpgradeAuthority

[`PublicKeyOption`](upgradablesrcclasspublickeyoption) = `PublicKeyOption`

The public key of the next upgrade authority, if a change is required.

If we upgrade the verification key, we may not be able to use the same upgrade
authority next time because the new o1js version can break the verification key
of the upgrade authority too, and since the upgrade authority serves many
contracts, it cannot be upgraded. In this case, we need to use another upgrade
authority with the public key that will be provided in `nextUpgradeAuthority`.

#### Returns

[`UpgradeAuthorityAnswer`](upgradablesrcclassupgradeauthorityanswer)

#### Inherited from

```ts
Struct({
  /
    The public key of the next upgrade authority, if a change is required.
   
    If we upgrade the verification key, we may not be able to use the same upgrade
    authority next time because the new o1js version can break the verification key
    of the upgrade authority too, and since the upgrade authority serves many
    contracts, it cannot be upgraded. In this case, we need to use another upgrade
    authority with the public key that will be provided in nextUpgradeAuthority.
   /
  nextUpgradeAuthority: PublicKeyOption,
  / Indicates whether the upgrade data has been successfully verified. /
  isVerified: Bool,
}).constructor
```

## Properties

### isVerified

```ts
isVerified: Bool = Bool;
```

Defined in: [packages/upgradable/src/upgradable.ts:70](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L70)

Indicates whether the upgrade data has been successfully verified.

#### Inherited from

```ts
Struct({
  /
    The public key of the next upgrade authority, if a change is required.
   
    If we upgrade the verification key, we may not be able to use the same upgrade
    authority next time because the new o1js version can break the verification key
    of the upgrade authority too, and since the upgrade authority serves many
    contracts, it cannot be upgraded. In this case, we need to use another upgrade
    authority with the public key that will be provided in nextUpgradeAuthority.
   /
  nextUpgradeAuthority: PublicKeyOption,
  / Indicates whether the upgrade data has been successfully verified. /
  isVerified: Bool,
}).isVerified
```

***

### nextUpgradeAuthority

```ts
nextUpgradeAuthority: PublicKeyOption = PublicKeyOption;
```

Defined in: [packages/upgradable/src/upgradable.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L68)

The public key of the next upgrade authority, if a change is required.

If we upgrade the verification key, we may not be able to use the same upgrade
authority next time because the new o1js version can break the verification key
of the upgrade authority too, and since the upgrade authority serves many
contracts, it cannot be upgraded. In this case, we need to use another upgrade
authority with the public key that will be provided in `nextUpgradeAuthority`.

#### Inherited from

```ts
Struct({
  /
    The public key of the next upgrade authority, if a change is required.
   
    If we upgrade the verification key, we may not be able to use the same upgrade
    authority next time because the new o1js version can break the verification key
    of the upgrade authority too, and since the upgrade authority serves many
    contracts, it cannot be upgraded. In this case, we need to use another upgrade
    authority with the public key that will be provided in nextUpgradeAuthority.
   /
  nextUpgradeAuthority: PublicKeyOption,
  / Indicates whether the upgrade data has been successfully verified. /
  isVerified: Bool,
}).nextUpgradeAuthority
```
