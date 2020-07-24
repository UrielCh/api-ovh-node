# Connector for OVHCloud service cluster-hadoop

This module contains all typing needed to use OvhCloud cluster-hadoop service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cluster-hadoop.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cluster-hadoop)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/cluster-hadoop
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiClusterHadoop from '@ovh-kimsufi/cluster-hadoop';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cluster/hadoop, GET /cluster/hadoop/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    clusterHadoop: apiClusterHadoop(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.clusterHadoop.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````