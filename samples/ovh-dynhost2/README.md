# ovh-dynhost2

[![NPM Version](https://img.shields.io/npm/v/ovh-dynhost2.svg?style=flat)](https://www.npmjs.org/package/ovh-dynhost2)

This script update a dynHost entry from ovh with your current public IP

This script use the npm packages `@ovh-api/api` and `@ovh-api/domain`

## setup

```bash
npm install -g ovh-dynhost2
```

## Usage

```bash
$ ovh-dynhost2
Options:
    Options:
    -d [domain]               add domain to configure
    -u [url]                  add url used to find public IP
    -l, --local <localAdress> Local address to bind if you have mutiple gateway
    -t, --token <tokenfile>   save and reuse the certificat by storing them in a file
    --timeout [timeout]       timeout to get ip address
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
