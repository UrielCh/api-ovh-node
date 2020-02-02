# @ovh-api

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/common.svg?style=api)](https://www.npmjs.org/package/@ovh-api/api)

## usage

This Api whould be used with a api typing modules [list](https://github.com/UrielCh/api-ovh-node/blob/master/README.md)
this typing give you all the information you need in your IDE, so you do not need any external documentation

### basic

This Ovh api client, use very compact and intuitive code syntax to works, take any API call from oany OVH swagger and convert it to this api syntax like this:

for example with the API **dbaas** from [here](https://api.ovh.com/console/#/dbaas/logs):

the call
`GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}`
will be call like this:

```typescript
archive = await dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).archive.$(archiveId).$get();
```

### factorize API

if you have a lots of call with the same prefix ex:

- `GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert`
- `GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`
- `PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`
- `DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`

you can factorize thoses call like this:

```typescript
const alertApi = dbaas.logs.$(serviceName)/output/graylog/stream/(streamId)/alert
const ids = await alertApi.$get();
if (ids.length) {
    const alert = await alertApi.$(ids[0]).$get();
    if (alert.conditionType === 'FIELD_CONTENT_VALUE')
        await alertApi.$(ids[0])$delete();
    else if (alert.conditionType === 'MESSAGE_COUNT')
        await alertApi.$(ids[0])$put({title: 'title 2'});
}
```

### cache usage

the API contains a default in memory cache that is very easy to activate, using the previous sample:

```typescript
const alertApi = dbaas.logs.$(serviceName)/output/graylog/stream/(streamId)/alert
// enable and configure cache
alertApi.$cache({size:20000, count: 100, ttl: 60*60});
// first call will populate the cache
let ids = await alertApi.$get();
// second call will use the cache
ids = await alertApi.$get();
// a delete will discard the previouly cached value
await alertApi.$(id[0]).$delete()
// repopulate the cache.
ids = await alertApi.$get();
```

### certificat management

The Api can query for a new certificat by oppening a new browser.

The activated consumerKey can be store in a cache file if `certCache` option is provided.

### retries management

if you have a connexion error, the api will try to recover up to 10 times by default, an more using `maxRetry` options.

## interactive usage

```typescript
import ApiIp from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

// accessRules can accepte rules separeted by comma, or an array of rules
// certCache save on disque the issued certificat for next program call.
const engine = new Ovh({accessRules: 'GET /ip, GET /me', certCache: 'secretToken.json'});

/**
 * you can build and api object to store all the sub-api you will used
 */
const api = {
    ip: ApiIp(engine)
    // me: ApiMe(engine)
    // cloud: ApiCloud(engine)
    // ...
}

/**
 * shorter syntax
 */
async function printIPProxy() {
    return await api.ip.$get();
}

printIP().then(console.log)

```

## Samples

[working samples can be find here](https://github.com/UrielCh/api-ovh-node/tree/master/samples)
