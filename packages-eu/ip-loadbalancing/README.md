# OVHCloud API client for **ip-loadbalancing** region Europe

This module contains all typing needed to use OvhCloud **ip-loadbalancing** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip-loadbalancing)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/ip-loadbalancing
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiIpLoadbalancing from '@ovh-api/ip-loadbalancing';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /ipLoadbalancing, GET /ipLoadbalancing/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ipLoadbalancing: apiIpLoadbalancing(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ipLoadbalancing.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
