# OVHCloud API client for **deskaas** region Canada

This module contains all typing needed to use OvhCloud **deskaas** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/deskaas)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/deskaas
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDeskaas from '@ovh-api-ca/deskaas';

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
