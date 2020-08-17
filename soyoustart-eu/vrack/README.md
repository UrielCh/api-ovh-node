# OVHCloud API client for **vrack** region Europe

This module contains all typing needed to use OvhCloud **vrack** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/vrack)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/vrack
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiVrack from '@ovh-soyoustart/vrack';

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
