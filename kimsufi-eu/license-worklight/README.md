# Connector for OVHCloud service license-worklight

This module contains all typing needed to use OvhCloud license-worklight service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-worklight)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/license-worklight
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiLicenseWorklight from '@ovh-kimsufi/license-worklight';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /license/worklight, GET /license/worklight/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseWorklight: apiLicenseWorklight(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseWorklight.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````