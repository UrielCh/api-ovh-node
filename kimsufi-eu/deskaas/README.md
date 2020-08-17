# OVHCloud API client for **deskaas** region Europe

This module contains all typing needed to use OvhCloud **deskaas** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/deskaas)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/deskaas
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiDeskaas from '@ovh-kimsufi/deskaas';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /deskaas, GET /deskaas/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    deskaas: apiDeskaas(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.deskaas.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
