# OVHCloud API client for **over-the-box** region Europe

This module contains all typing needed to use OvhCloud **over-the-box** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/over-the-box.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/over-the-box)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/over-the-box
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiOverTheBox from '@ovh-api/over-the-box';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /overTheBox, GET /overTheBox/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    overTheBox: apiOverTheBox(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.overTheBox.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
