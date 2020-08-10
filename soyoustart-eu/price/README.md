# OVHCloud API client for **price** region Europe

This module contains all typing needed to use OvhCloud **price** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/price)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/price
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiPrice from '@ovh-soyoustart/price';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /price, GET /price/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    price: apiPrice(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.price.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
