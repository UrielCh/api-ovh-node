# OVHCloud API client for **dbaas-queue** region Europe

This module contains all typing needed to use OvhCloud **dbaas-queue** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dbaas-queue)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/dbaas-queue
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiDbaasQueue from '@ovh-kimsufi/dbaas-queue';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dbaas/queue, GET /dbaas/queue/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasQueue: apiDbaasQueue(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasQueue.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
