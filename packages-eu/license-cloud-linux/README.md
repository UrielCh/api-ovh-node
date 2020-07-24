# Connector for OVHCloud service license-cloud-linux

This module contains all typing needed to use OvhCloud license-cloud-linux service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-cloud-linux)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-cloud-linux
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicenseCloudLinux from '@ovh-api/license-cloud-linux';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /license/cloudLinux, GET /license/cloudLinux/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseCloudLinux: apiLicenseCloudLinux(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseCloudLinux.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````