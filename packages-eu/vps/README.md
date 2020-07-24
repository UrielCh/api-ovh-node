# Connector for OVHCloud service vps

This module contains all typing needed to use OvhCloud vps service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/vps)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/vps
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiVps from '@ovh-api/vps';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /vps, GET /vps/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    vps: apiVps(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.vps.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````