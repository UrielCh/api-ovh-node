# Connector for OVHCloud service dedicated-housing

This module contains all typing needed to use OvhCloud dedicated-housing service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-housing)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/dedicated-housing
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDedicatedHousing from '@ovh-api-ca/dedicated-housing';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dedicated/housing, GET /dedicated/housing/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedHousing: apiDedicatedHousing(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedHousing.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````