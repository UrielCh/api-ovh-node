# OVHCloud API client for **metrics** region Europe

This module contains all typing needed to use OvhCloud **metrics** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/metrics)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/metrics
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiMetrics from '@ovh-api/metrics';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /metrics, GET /metrics/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    metrics: apiMetrics(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.metrics.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
