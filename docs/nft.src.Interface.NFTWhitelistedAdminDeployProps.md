---
title: NFTWhitelistedAdminDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.NFTWhitelistedAdminDeployProps
order: 206
---

# Interface: NFTWhitelistedAdminDeployProps

## Properties overview

- admin:  PublicKey; [↗](#admin)
- canPause:  Bool; [↗](#canpause)
- isPaused:  Bool; [↗](#ispaused)
- upgradeAuthority:  PublicKey; [↗](#upgradeauthority)
- uri:  string; [↗](#uri)
- whitelist:  Whitelist; [↗](#whitelist)

Deployment properties for the `NFTWhitelistedAdminContract`.

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### admin

```ts
admin: PublicKey;
```

The public key of the admin or owner of the contract.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L61)

***

### canPause

```ts
canPause: Bool;
```

Flag indicating whether the contract can be paused.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:70](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L70)

***

### isPaused

```ts
isPaused: Bool;
```

Flag indicating whether the contract is currently paused.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L72)

***

### upgradeAuthority

```ts
upgradeAuthority: PublicKey;
```

The public key of the Upgrade Authority Contract.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L63)

***

### uri

```ts
uri: string;
```

The URI of the zkApp.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L68)

***

### whitelist

```ts
whitelist: Whitelist;
```

The whitelist.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L65)
