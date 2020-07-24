# Connector for OVHCloud service dedicated-ceph

This module contains all typing needed to use OvhCloud dedicated-ceph service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-ceph)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/dedicated-ceph
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDedicatedCeph from '@ovh-api-ca/dedicated-ceph';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dedicated/ceph, GET /dedicated/ceph/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedCeph: apiDedicatedCeph(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedCeph.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````