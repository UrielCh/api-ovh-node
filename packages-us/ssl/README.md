# Connector for OVHCloud service ssl

This module contains all typing needed to use OvhCloud ssl service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ssl)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/ssl
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiSsl from '@ovh-api-us/ssl';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /ssl, GET /ssl/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ssl: apiSsl(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ssl.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````