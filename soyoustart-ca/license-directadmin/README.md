# Connector for OVHCloud service license-directadmin

This module contains all typing needed to use OvhCloud license-directadmin service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-directadmin)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart-ca/me
npm install --save @ovh-soyoustart-ca/license-directadmin
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart-ca/me';
import apiLicenseDirectadmin from '@ovh-soyoustart-ca/license-directadmin';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /license/directadmin, GET /license/directadmin/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseDirectadmin: apiLicenseDirectadmin(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseDirectadmin.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````