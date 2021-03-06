# OVHCloud API client for **cluster-hadoop** region Europe

This module contains all typing needed to use OvhCloud **cluster-hadoop** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/cluster-hadoop.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cluster-hadoop)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/cluster-hadoop
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiClusterHadoop from '@ovh-api/cluster-hadoop';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cluster/hadoop, GET /cluster/hadoop/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    clusterHadoop: apiClusterHadoop(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.clusterHadoop.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
