# Connector for OVHCloud service supply-mondial-relay

This module contains all typing needed to use OvhCloud supply-mondial-relay service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/supply-mondial-relay.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/supply-mondial-relay)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/supply-mondial-relay
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiSupplyMondialRelay from '@ovh-api/supply-mondial-relay';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /supply/mondialRelay, GET /supply/mondialRelay/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    supplyMondialRelay: apiSupplyMondialRelay(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.supplyMondialRelay.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````