# OVHCloud API client for **order** region Europe

This module contains all typing needed to use OvhCloud **order** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/order)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/order
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiOrder from '@ovh-kimsufi/order';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /order, GET /order/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    order: apiOrder(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.order.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
