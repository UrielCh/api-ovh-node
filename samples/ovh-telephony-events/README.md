# ovh-bill-importer

[![NPM Version](https://img.shields.io/npm/v/ovh-telephony-events.svg?style=flat)](https://www.npmjs.org/package/ovh-telephony-events)

Import Api Events to a queueing service (Redis) so it can be easily integrate to your system.

open Issue if you are interested in `RabbitMQ`, `Kafka`, `ZeroMQ` ...

This script use the npm packages `@ovh-api/api` and `@ovh-api/telephony`

## setup

```bash
npm install -g ovh-telephony-events
```

## Usage

```bash
$ ovh-bill-importer --help
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
