# Connector for OVHCloud service email-pro

This module contains all typing needed to use OvhCloud email-pro service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-pro)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-pro
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailPro from '@ovh-kimsufi/email-pro';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /email/pro, GET /email/pro/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailPro: apiEmailPro(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailPro.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````