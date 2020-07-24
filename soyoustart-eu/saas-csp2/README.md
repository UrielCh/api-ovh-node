# Connector for OVHCloud service saas-csp2

This module contains all typing needed to use OvhCloud saas-csp2 service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/saas-csp2.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/saas-csp2)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/saas-csp2
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiSaasCsp2 from '@ovh-soyoustart/saas-csp2';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /saas/csp2, GET /saas/csp2/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    saasCsp2: apiSaasCsp2(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.saasCsp2.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````