# OVHCloud API client for **kube** region Europe

This module contains all typing needed to use OvhCloud **kube** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/kube.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/kube)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/kube
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiKube from '@ovh-api/kube';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /kube, GET /kube/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    kube: apiKube(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.kube.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
