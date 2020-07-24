# OVHCloud API client for **me** region Europe

This module contains all typing needed to use OvhCloud **me** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/me)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /me, GET /me/*', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
}

const test = async () => {
    const data = await api.me.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
