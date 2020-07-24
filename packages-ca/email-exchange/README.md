# OVHCloud API client for **email-exchange** region Canada

This module contains all typing needed to use OvhCloud **email-exchange** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/email-exchange)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/email-exchange
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiEmailExchange from '@ovh-api-ca/email-exchange';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /email/exchange, GET /email/exchange/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailExchange: apiEmailExchange(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailExchange.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
