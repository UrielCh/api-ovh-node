# OVHCloud API client for **domain** region Canada

This module contains all typing needed to use OvhCloud **domain** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/domain)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/domain
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDomain from '@ovh-api-ca/domain';

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
