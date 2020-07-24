# Connector for OVHCloud service vps

This module contains all typing needed to use OvhCloud vps service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vps)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/vps
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiVps from '@ovh-api-ca/vps';

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