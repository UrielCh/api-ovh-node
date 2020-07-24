# Connector for OVHCloud service sms

This module contains all typing needed to use OvhCloud sms service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/sms.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/sms)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/sms
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiSms from '@ovh-api/sms';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /sms, GET /sms/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    sms: apiSms(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.sms.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````