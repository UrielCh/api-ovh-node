# OVHCloud API client for **dbaas-timeseries** region Europe

This module contains all typing needed to use OvhCloud **dbaas-timeseries** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dbaas-timeseries)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/dbaas-timeseries
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiDbaasTimeseries from '@ovh-soyoustart/dbaas-timeseries';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dbaas/timeseries, GET /dbaas/timeseries/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasTimeseries: apiDbaasTimeseries(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasTimeseries.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
