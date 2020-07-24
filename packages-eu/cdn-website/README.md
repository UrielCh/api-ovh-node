# OVHCloud API client for **cdn-website** region Europe

This module contains all typing needed to use OvhCloud **cdn-website** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-website.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-website)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/cdn-website
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCdnWebsite from '@ovh-api/cdn-website';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cdn/website, GET /cdn/website/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnWebsite: apiCdnWebsite(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnWebsite.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
