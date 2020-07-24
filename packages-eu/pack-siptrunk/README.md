# Connector for OVHCloud service pack-siptrunk

This module contains all typing needed to use OvhCloud pack-siptrunk service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/pack-siptrunk)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/pack-siptrunk
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiPackSiptrunk from '@ovh-api/pack-siptrunk';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /pack/siptrunk, GET /pack/siptrunk/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    packSiptrunk: apiPackSiptrunk(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.packSiptrunk.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````