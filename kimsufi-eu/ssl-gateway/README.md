# OVHCloud API client for **ssl-gateway** region Europe

This module contains all typing needed to use OvhCloud **ssl-gateway** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ssl-gateway)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/ssl-gateway
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiSslGateway from '@ovh-kimsufi/ssl-gateway';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /sslGateway, GET /sslGateway/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    sslGateway: apiSslGateway(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.sslGateway.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```