# OVHCloud API client for **price** region Canada

This module contains all typing needed to use OvhCloud **price** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/price)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi-ca/me
npm install --save @ovh-kimsufi-ca/price
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi-ca/me';
import apiPrice from '@ovh-kimsufi-ca/price';

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
