# Connector for OVHCloud service support

This module contains all typing needed to use OvhCloud support service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/support)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart-ca/me
npm install --save @ovh-soyoustart-ca/support
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart-ca/me';
import apiSupport from '@ovh-soyoustart-ca/support';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /support, GET /support/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    support: apiSupport(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.support.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````