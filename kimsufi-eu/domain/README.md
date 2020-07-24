# OVHCloud API client for **domain** region Europe

This module contains all typing needed to use OvhCloud **domain** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/domain)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/domain
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiDomain from '@ovh-kimsufi/domain';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /domain, GET /domain/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    domain: apiDomain(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.domain.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
