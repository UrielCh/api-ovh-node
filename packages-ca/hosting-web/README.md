# Connector for OVHCloud service hosting-web

This module contains all typing needed to use OvhCloud hosting-web service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/hosting-web)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/hosting-web
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiHostingWeb from '@ovh-api-ca/hosting-web';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /hosting/web, GET /hosting/web/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingWeb: apiHostingWeb(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingWeb.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````