# OVHCloud API client for **ssl** region Europe

This module contains all typing needed to use OvhCloud **ssl** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ssl)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/ssl
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiSsl from '@ovh-kimsufi/ssl';

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
