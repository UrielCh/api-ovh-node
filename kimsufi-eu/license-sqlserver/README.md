# OVHCloud API client for **license-sqlserver** region Europe

This module contains all typing needed to use OvhCloud **license-sqlserver** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-sqlserver)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/license-sqlserver
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiLicenseSqlserver from '@ovh-kimsufi/license-sqlserver';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/sqlserver, GET /license/sqlserver/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseSqlserver: apiLicenseSqlserver(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseSqlserver.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
