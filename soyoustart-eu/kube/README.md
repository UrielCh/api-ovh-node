# OVHCloud API client for **kube** region Europe

This module contains all typing needed to use OvhCloud **kube** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/kube.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/kube)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/kube
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiKube from '@ovh-soyoustart/kube';

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
