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
  listen.on("message", (m) => console.log(m));
   // OvhEventListenerV1 promise never resolve
   // OvhEventListenerV2 promise when all even are captured
  await listener.listen();
```

## Usage script

```bash
$ ovh-telephony-events --help
Usage: index.ts [options]

Options:
  -V, --version                   Output the version number
  --reset                         Reset all tokens
  --redis-host <host>             Store Even in Redis
  --redis-port <port>             Use non standatd port
  --redis-password <password>     Provide a redis password
  --channel <channel>             Channel key used in redis to push events
  --cache <cache.json>            Store and cache event tokens
  --cert-cache <cert-cache.json>  Store OVH cert used to generate event tokens
  --debounce <3000>               Debounce log in ms (default: "3000")
  --v1                            Use Api V1 (by default use V2)
  -h, --help                      Output usage information
```

### example

```
ovh-telephony-events --redis-host 127.0.0.1 --cache tokens.json --channel event-voip
```

![ovh-telephony-events](https://github.com/UrielCh/api-ovh-node/blob/master/samples/ressources/ovh-telephony-events.gif?raw=true "preview")

## install nodejs

[samples doc](https://github.com/UrielCh/api-ovh-node/blob/master/samples/README.md)


