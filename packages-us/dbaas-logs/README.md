# OVHCloud API client for **dbaas-logs** region USA

This module contains all typing needed to use OvhCloud **dbaas-logs** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-logs)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dbaas-logs
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDbaasLogs from '@ovh-api-us/dbaas-logs';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dbaas/logs, GET /dbaas/logs/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasLogs: apiDbaasLogs(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasLogs.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
