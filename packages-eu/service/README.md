# OVHCloud API client for **service** region Europe

This module contains all typing needed to use OvhCloud **service** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/service)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/service
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiService from '@ovh-api/service';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /service, GET /service/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    service: apiService(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.service.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
