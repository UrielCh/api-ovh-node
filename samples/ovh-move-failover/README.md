# ovh-move-failover

A command line tools to move Ovh failover between servers.

## install nodejs

[![NPM Version](https://img.shields.io/npm/v/ovh-move-failover.svg?style=flat)](https://www.npmjs.org/package/ovh-move-failover)

If nodejs is not installed:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
bash
nvm install node
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
bash
nvm install node
```

## migrate IPs


'''bash
npx ovh-move-failover  --help
Usage: ovh-move-failover [options] [source] [destination]

Migrate IP from source to destination, source can be any failover ip or service, if omit paral list available values

Options:
  -V, --version            output the version number
  -c, --cache <cacheFile>  cache cert in file
  -h, --help               display help for command
'''

```bash
./bin/ovh-move-failover  --cache ../../../move.json
```
