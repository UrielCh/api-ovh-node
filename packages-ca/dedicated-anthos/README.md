# OVHCloud API client for **dedicated-anthos** region Canada

This module contains all typing needed to use OvhCloud **dedicated-anthos** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-anthos.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-anthos)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/dedicated-anthos
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDedicatedAnthos from '@ovh-api-ca/dedicated-anthos';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/anthos, GET /dedicated/anthos/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedAnthos: apiDedicatedAnthos(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedAnthos.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
