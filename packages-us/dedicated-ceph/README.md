# OVHCloud API client for **dedicated-ceph** region USA

This module contains all typing needed to use OvhCloud **dedicated-ceph** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-ceph)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dedicated-ceph
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDedicatedCeph from '@ovh-api-us/dedicated-ceph';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/ceph, GET /dedicated/ceph/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedCeph: apiDedicatedCeph(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedCeph.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
