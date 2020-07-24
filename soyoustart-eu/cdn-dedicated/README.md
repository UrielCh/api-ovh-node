# Connector for OVHCloud service cdn-dedicated

This module contains all typing needed to use OvhCloud cdn-dedicated service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cdn-dedicated)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/cdn-dedicated
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiCdnDedicated from '@ovh-soyoustart/cdn-dedicated';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cdn/dedicated, GET /cdn/dedicated/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnDedicated: apiCdnDedicated(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnDedicated.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````