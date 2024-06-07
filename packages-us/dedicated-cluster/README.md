# OVHCloud API client for **dedicated-cluster** region USA

This module contains all typing needed to use OvhCloud **dedicated-cluster** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-cluster.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-cluster)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dedicated-cluster
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDedicatedCluster from '@ovh-api-us/dedicated-cluster';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/cluster, GET /dedicated/cluster/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedCluster: apiDedicatedCluster(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedCluster.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
