# Connector for OVHCloud service partners

This module contains all typing needed to use OvhCloud partners service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/partners.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/partners)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/partners
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiPartners from '@ovh-kimsufi/partners';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /partners, GET /partners/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    partners: apiPartners(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.partners.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````