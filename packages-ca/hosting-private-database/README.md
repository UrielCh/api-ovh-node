# Connector for OVHCloud service hosting-private-database

This module contains all typing needed to use OvhCloud hosting-private-database service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/hosting-private-database)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/hosting-private-database
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiHostingPrivateDatabase from '@ovh-api-ca/hosting-private-database';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /hosting/privateDatabase, GET /hosting/privateDatabase/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingPrivateDatabase: apiHostingPrivateDatabase(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingPrivateDatabase.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````