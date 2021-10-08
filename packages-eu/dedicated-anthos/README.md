# OVHCloud API client for **dedicated-anthos** region Europe

This module contains all typing needed to use OvhCloud **dedicated-anthos** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-anthos.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-anthos)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/dedicated-anthos
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiDedicatedAnthos from '@ovh-api/dedicated-anthos';

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
