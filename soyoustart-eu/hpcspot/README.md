# OVHCloud API client for **hpcspot** region Europe

This module contains all typing needed to use OvhCloud **hpcspot** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/hpcspot.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/hpcspot)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/hpcspot
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiHpcspot from '@ovh-soyoustart/hpcspot';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /hpcspot, GET /hpcspot/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hpcspot: apiHpcspot(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hpcspot.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```