# OVHCloud API client for **hosting-private-database** region Europe

This module contains all typing needed to use OvhCloud **hosting-private-database** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-private-database)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/hosting-private-database
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiHostingPrivateDatabase from '@ovh-api/hosting-private-database';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /hosting/privateDatabase, GET /hosting/privateDatabase/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingPrivateDatabase: apiHostingPrivateDatabase(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingPrivateDatabase.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
