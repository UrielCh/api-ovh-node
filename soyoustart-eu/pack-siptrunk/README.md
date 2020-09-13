# OVHCloud API client for **pack-siptrunk** region Europe

This module contains all typing needed to use OvhCloud **pack-siptrunk** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/pack-siptrunk)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/pack-siptrunk
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiPackSiptrunk from '@ovh-soyoustart/pack-siptrunk';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /pack/siptrunk, GET /pack/siptrunk/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    packSiptrunk: apiPackSiptrunk(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.packSiptrunk.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```