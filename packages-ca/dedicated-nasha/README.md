# Connector for OVHCloud service dedicated-nasha

This module contains all typing needed to use OvhCloud dedicated-nasha service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-nasha)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/dedicated-nasha
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDedicatedNasha from '@ovh-api-ca/dedicated-nasha';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dedicated/nasha, GET /dedicated/nasha/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedNasha: apiDedicatedNasha(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedNasha.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````