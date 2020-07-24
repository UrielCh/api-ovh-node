# Connector for OVHCloud service email-mxplan

This module contains all typing needed to use OvhCloud email-mxplan service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-mxplan)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-mxplan
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailMxplan from '@ovh-kimsufi/email-mxplan';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /email/mxplan, GET /email/mxplan/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailMxplan: apiEmailMxplan(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailMxplan.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````