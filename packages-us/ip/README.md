# OVHCloud API client for **ip** region USA

This module contains all typing needed to use OvhCloud **ip** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ip)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/ip
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiIp from '@ovh-api-us/ip';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /ip, GET /ip/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ip: apiIp(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ip.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
