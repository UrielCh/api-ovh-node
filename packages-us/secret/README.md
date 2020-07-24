# Connector for OVHCloud service secret

This module contains all typing needed to use OvhCloud secret service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/secret.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/secret)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/secret
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiSecret from '@ovh-api-us/secret';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /secret, GET /secret/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    secret: apiSecret(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.secret.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````