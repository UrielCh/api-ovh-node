# Connector for OVHCloud service over-the-box

This module contains all typing needed to use OvhCloud over-the-box service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/over-the-box.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/over-the-box)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/over-the-box
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiOverTheBox from '@ovh-soyoustart/over-the-box';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /overTheBox, GET /overTheBox/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    overTheBox: apiOverTheBox(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.overTheBox.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````