# OVHCloud API client for **ssl** region USA

This module contains all typing needed to use OvhCloud **ssl** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ssl)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/ssl
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiSsl from '@ovh-api-us/ssl';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /ssl, GET /ssl/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ssl: apiSsl(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ssl.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
