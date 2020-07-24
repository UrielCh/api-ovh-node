# Connector for OVHCloud service dedicated-nas

This module contains all typing needed to use OvhCloud dedicated-nas service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-nas)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/dedicated-nas
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiDedicatedNas from '@ovh-api/dedicated-nas';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dedicated/nas, GET /dedicated/nas/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedNas: apiDedicatedNas(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedNas.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````