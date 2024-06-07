# OVHCloud API client for **products** region Canada

This module contains all typing needed to use OvhCloud **products** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/products.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/products)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/products
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiProducts from '@ovh-api-ca/products';

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
