# Connector for OVHCloud service new-account

This module contains all typing needed to use OvhCloud new-account service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/new-account)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi-ca/me
npm install --save @ovh-kimsufi-ca/new-account
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi-ca/me';
import apiNewAccount from '@ovh-kimsufi-ca/new-account';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /newAccount, GET /newAccount/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    newAccount: apiNewAccount(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.newAccount.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````