# OVHCloud API client for **dedicated-server** region Canada

This module contains all typing needed to use OvhCloud **dedicated-server** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/dedicated-server)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart-ca/me
npm install --save @ovh-soyoustart-ca/dedicated-server
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart-ca/me';
import apiDedicatedServer from '@ovh-soyoustart-ca/dedicated-server';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/server, GET /dedicated/server/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedServer: apiDedicatedServer(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedServer.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
