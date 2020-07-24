# OVHCloud API client for **new-account** region Europe

This module contains all typing needed to use OvhCloud **new-account** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/new-account)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/new-account
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiNewAccount from '@ovh-soyoustart/new-account';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /newAccount, GET /newAccount/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    newAccount: apiNewAccount(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.newAccount.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
