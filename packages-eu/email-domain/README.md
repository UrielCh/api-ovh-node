# Connector for OVHCloud service email-domain

This module contains all typing needed to use OvhCloud email-domain service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-domain)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/email-domain
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiEmailDomain from '@ovh-api/email-domain';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /email/domain, GET /email/domain/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailDomain: apiEmailDomain(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailDomain.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````