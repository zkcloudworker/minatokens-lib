---
title: MinaTokens API
category: 6749c4dba3a7a4005bae1197
hidden: false
order: 1
---

# MinaTokens API

## MinaTokens API Documentation

Welcome to the MinaTokens API documentation! This API enables developers to easily create and manage custom tokens on the MINA blockchain using zkCloudWorker technology.

Explore our comprehensive API documentation and try out live API endpoints at [docs.minatokens.com](https://docs.minatokens.com)

To obtain an API key, visit [minatokens.com/api](https://minatokens.com/api)

## Overview

MinaTokens is a no-code custom token launchpad that simplifies the creation and management of MINA custom tokens. Our API provides developers with programmatic access to token operations, allowing seamless integration into your applications.

### Key Features

- **Token Creation**: Launch custom tokens with configurable parameters
- **Token Management**: Mint, transfer, and manage token distributions
- **Batch Operations**: Perform batch mints and transfers for airdrops
- **Transaction Building**: Automated transaction building and proving
- **Monitoring**: Track token statistics and transaction status

## Getting Started

### Authentication

All API requests require authentication using an API key. Include your API key in the request headers:

'x-api-key': 'your-api-key'

To obtain an API key, visit [minatokens.com/api](https://minatokens.com/api)

### Base URLs

- Devnet: `https://minatokens.com/api/v1/`
- Zeko: `https://zekotokens.com/api/v1/`

## Quick Start Guide

### 1. Deploy a New Token

```javascript
const response = await fetch("https://minatokens.com/api/v1/deploy", {
  method: "POST",
  headers: {
    "x-api-key": "your-api-key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    adminAddress: "B62...",
    symbol: "TEST",
    decimals: 9,
    uri: "https://minatokens.com",
  }),
});
```

### 2. Get Token Information

```typescript
const response = await fetch("https://minatokens.com/api/v1/info", {
  method: "POST",
  headers: {
    "x-api-key": "your-api-key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tokenAddress: "B62qpFzLKkGKMZcmY6wrbyn8Sf9sWUT1HG4omSbvFKH2nXSNjCoQ6Xs",
  }),
});
```

See the complete examples at https://github.com/zkcloudworker/tokens-api-example

## Core Concepts

### Token Types

MinaTokens supports two categories of tokens:

1. **Regular Tokens**: Can be freely created and transferred by any user
2. **Whitelisted Tokens**: Created with MDA (Mina Developers Alliance) endorsement, enabling additional features like buying and selling

### Transaction Flow

1. **Build**: Create a transaction using `/transaction` endpoint
2. **Prove**: Submit the transaction for proving using `/prove` endpoint
3. **Monitor**: Track transaction status using `/tx-status` endpoint

## Security Considerations

- All sensitive operations require proper authentication
- Whitelisted tokens require MDA member endorsement
- Transaction proving occurs in secure cloud environment
- Wallet signatures are required for all transactions

## Support

For technical support or questions:

- Email: api@minatokens.com
