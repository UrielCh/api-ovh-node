# OVHCloud API client for **ovh-cloud-connect** region USA

This module contains all typing needed to use OvhCloud **ovh-cloud-connect** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ovh-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ovh-cloud-connect)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/ovh-cloud-connect
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiOvhCloudConnect from '@ovh-api-us/ovh-cloud-connect';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /ovhCloudConnect, GET /ovhCloudConnect/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ovhCloudConnect: apiOvhCloudConnect(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ovhCloudConnect.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
