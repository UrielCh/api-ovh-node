# Connector for OVHCloud service license-plesk

This module contains all typing needed to use OvhCloud license-plesk service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-plesk)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-plesk
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicensePlesk from '@ovh-api/license-plesk';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /license/plesk, GET /license/plesk/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licensePlesk: apiLicensePlesk(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licensePlesk.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````