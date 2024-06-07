# OVHCloud API client for **products** region Europe

This module contains all typing needed to use OvhCloud **products** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/products.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/products)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/products
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiProducts from '@ovh-api/products';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /products, GET /products/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    products: apiProducts(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.products.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
