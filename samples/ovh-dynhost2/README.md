# ovh-dynhost2

[![NPM Version](https://img.shields.io/npm/v/ovh-dynhost2.svg?style=flat)](https://www.npmjs.org/package/ovh-dynhost2)

This script update a dynHost entry from ovh with your current public IP

This script use the npm packages `@ovh-api/api` and `@ovh-api/domain`

## setup

```bash
npm install -g ovh-dynhost2
```

or without setup

```bash
npx ovh-dynhost2 --help
```

## Usage

```bash
$> ovh-dynhost2 --help
Usage: index [options] [command]

create and update a dyn-host or standard DNS entry.

Options:
  -V, --version                  output the version number
  -v, --verbose                  verbose process
  -s, --standard                 use standard DNS entry instead of dynhost (default: [])
  -d, --domain <domain>          add domain to configure (default: [])
  -u, --url <url>                add url used to find public IP (default: [])
  -l, --local <localAdress>      Local address to bind if you have mutiple gateway
  -i, --interface <inet>         interface to use
  -t, --token <tokenfile>        save and reuse the certificat by storing them in a file
  -c, --credential <credential>  provide a credential as {appKey}:{appSecret}:{consumerKey} to be store in token file
  --curl                         use curl
  --timeout <timeout>            timeout to get ip address (default: "2000")
  -h, --help                     display help for command

Commands:
  dump                           dump compact credential for quick deploy
```

### example

Update 2 entry

```bash
ovh-dynhost2 -d dom1.domain.com -d dom1.seconddom.net -t ~/.secretToken.json
```

Update one entry with an 2 custom url to detect public IP

```bash
ovh-dynhost2 -d dom1.domain.com -u http://monip.org -u http://ipProvider1.org/raw -t ~/.secretToken.json
```

Update one entry on a multiple gateway host by interface name

```bash
ovh-dynhost2 -d dom1.domain.com -l eth2
```

Update one entry on a multiple gateway host by interface IP

```bash
ovh-dynhost2 -d dom1.domain.com -l 10.0.0.2
```

### note

To make the compilation works for a global root setup, you may need to configure your npm with this:

```bash
apt install python libcurl4-openssl-dev build-essential
npm install -g node-pre-gyp

npm config set user 0
npm config set unsafe-perm true

npm install -g ovh-dynhost2
```
