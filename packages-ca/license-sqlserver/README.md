# OVHCloud API client for **license-sqlserver** region Canada

This module contains all typing needed to use OvhCloud **license-sqlserver** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-sqlserver)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/license-sqlserver
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiLicenseSqlserver from '@ovh-api-ca/license-sqlserver';

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
