# OVHCloud API client for **supply-mondial-relay** region Europe

This module contains all typing needed to use OvhCloud **supply-mondial-relay** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/supply-mondial-relay.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/supply-mondial-relay)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/supply-mondial-relay
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiSupplyMondialRelay from '@ovh-kimsufi/supply-mondial-relay';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /supply/mondialRelay, GET /supply/mondialRelay/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    supplyMondialRelay: apiSupplyMondialRelay(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.supplyMondialRelay.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
