# OVHCloud API client for **dedicated-cloud** region Europe

This module contains all typing needed to use OvhCloud **dedicated-cloud** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-cloud)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/dedicated-cloud
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiDedicatedCloud from '@ovh-soyoustart/dedicated-cloud';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicatedCloud, GET /dedicatedCloud/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedCloud: apiDedicatedCloud(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedCloud.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
