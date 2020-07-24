# Connector for OVHCloud service license-cpanel

This module contains all typing needed to use OvhCloud license-cpanel service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-cpanel)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-cpanel
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicenseCpanel from '@ovh-api/license-cpanel';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /license/cpanel, GET /license/cpanel/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseCpanel: apiLicenseCpanel(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseCpanel.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````