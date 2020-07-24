# Connector for OVHCloud service pack-siptrunk

This module contains all typing needed to use OvhCloud pack-siptrunk service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/pack-siptrunk)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/pack-siptrunk
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiPackSiptrunk from '@ovh-soyoustart/pack-siptrunk';

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