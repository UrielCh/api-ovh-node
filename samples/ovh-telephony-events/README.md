# ovh-telephony-events

[![NPM Version](https://img.shields.io/npm/v/ovh-telephony-events.svg?style=flat)](https://www.npmjs.org/package/ovh-telephony-events)

Import Api Events to a queueing service (Redis) so it can be easily integrate to your system.

open Issue if you are interested in `RabbitMQ`, `Kafka`, `ZeroMQ` ... version

This script use the npm packages `@ovh-api/api` and `@ovh-api/telephony`

## setup

```bash
npm install -g ovh-telephony-events
```

## Usage API

```typescript
  const listener = new OvhEventListenerV2(tokens);
  listen.on("message", (m) => console.log(m))
  await listener.listen(); // this promise never get resolved.
```

## Usage script

```bash
$ ovh-telephony-events --help
Usage: index.ts [options]

Options:
  -V, --version                output the version number
  --redis-host <host>          store Even in Redis
  --redis-port <port>          use non standatd port
  --redis-password <password>  provide a redis password
  --channel <channel>          channel key used in redis to push events
  --cache <cacheFile.json>     store and cache tokens
  --v1                         use Api V1 (by default use V2)
  -h, --help                   output usage information
```

### example

```
ovh-telephony-events --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
```

![ovh-telephony-events](https://github.com/UrielCh/api-ovh-node/blob/master/samples/ressources/ovh-telephony-events.gif?raw=true "preview")

## install nodejs

[samples doc](https://github.com/UrielCh/api-ovh-node/blob/master/samples/README.md)


