# OVHCloud API client for **caas-registry** region Europe

This module contains all typing needed to use OvhCloud **caas-registry** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/caas-registry.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/caas-registry)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/caas-registry
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiCaasRegistry from '@ovh-kimsufi/caas-registry';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /caas/registry, GET /caas/registry/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    caasRegistry: apiCaasRegistry(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.caasRegistry.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
