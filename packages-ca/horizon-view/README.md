# OVHCloud API client for **horizon-view** region Canada

This module contains all typing needed to use OvhCloud **horizon-view** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/horizon-view)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/horizon-view
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiHorizonView from '@ovh-api-ca/horizon-view';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /horizonView, GET /horizonView/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    horizonView: apiHorizonView(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.horizonView.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
