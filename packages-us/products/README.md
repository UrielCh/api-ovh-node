# OVHCloud API client for **products** region USA

This module contains all typing needed to use OvhCloud **products** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/products.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/products)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/products
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiProducts from '@ovh-api-us/products';

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
