# Connector for OVHCloud service vip

This module contains all typing needed to use OvhCloud vip service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vip)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/vip
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiVip from '@ovh-api-ca/vip';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /vip, GET /vip/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    vip: apiVip(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.vip.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````