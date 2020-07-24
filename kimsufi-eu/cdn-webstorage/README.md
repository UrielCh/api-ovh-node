# Connector for OVHCloud service cdn-webstorage

This module contains all typing needed to use OvhCloud cdn-webstorage service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cdn-webstorage.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cdn-webstorage)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/cdn-webstorage
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiCdnWebstorage from '@ovh-kimsufi/cdn-webstorage';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cdn/webstorage, GET /cdn/webstorage/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnWebstorage: apiCdnWebstorage(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnWebstorage.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````