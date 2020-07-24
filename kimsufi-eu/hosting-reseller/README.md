# Connector for OVHCloud service hosting-reseller

This module contains all typing needed to use OvhCloud hosting-reseller service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/hosting-reseller.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/hosting-reseller)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/hosting-reseller
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiHostingReseller from '@ovh-kimsufi/hosting-reseller';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /hosting/reseller, GET /hosting/reseller/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingReseller: apiHostingReseller(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingReseller.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````