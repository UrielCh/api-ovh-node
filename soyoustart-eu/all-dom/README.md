# OVHCloud API client for **all-dom** region Europe

This module contains all typing needed to use OvhCloud **all-dom** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/all-dom.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/all-dom)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/all-dom
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiAllDom from '@ovh-soyoustart/all-dom';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /allDom, GET /allDom/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    allDom: apiAllDom(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.allDom.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
