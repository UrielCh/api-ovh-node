# OVHCloud API client for **vrack** region Europe

This module contains all typing needed to use OvhCloud **vrack** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/vrack)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/vrack
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiVrack from '@ovh-kimsufi/vrack';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /vrack, GET /vrack/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    vrack: apiVrack(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.vrack.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
