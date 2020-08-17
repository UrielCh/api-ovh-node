# OVHCloud API client for **vip** region Europe

This module contains all typing needed to use OvhCloud **vip** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/vip)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/vip
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiVip from '@ovh-soyoustart/vip';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /vip, GET /vip/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    vip: apiVip(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.vip.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
