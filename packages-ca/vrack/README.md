# OVHCloud API client for **vrack** region Canada

This module contains all typing needed to use OvhCloud **vrack** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vrack)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/vrack
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiVrack from '@ovh-api-ca/vrack';

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
