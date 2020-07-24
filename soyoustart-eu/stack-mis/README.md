# OVHCloud API client for **stack-mis** region Europe

This module contains all typing needed to use OvhCloud **stack-mis** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/stack-mis.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/stack-mis)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/stack-mis
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiStackMis from '@ovh-soyoustart/stack-mis';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /stack/mis, GET /stack/mis/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    stackMis: apiStackMis(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.stackMis.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
