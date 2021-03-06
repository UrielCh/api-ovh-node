# OVHCloud API client for **caas-containers** region Europe

This module contains all typing needed to use OvhCloud **caas-containers** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/caas-containers.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/caas-containers)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/caas-containers
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCaasContainers from '@ovh-api/caas-containers';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /caas/containers, GET /caas/containers/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    caasContainers: apiCaasContainers(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.caasContainers.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
