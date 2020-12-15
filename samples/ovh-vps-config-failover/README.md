# ovh-vps-config-failover

[![NPM Version](https://img.shields.io/npm/v/ovh-vps-config-failover.svg?style=flat)](https://www.npmjs.org/package/ovh-vps-config-failover)

If nodejs is not installed:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
bash
nvm install node
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
bash
nvm install node
```

then

Configure the IP-failover on OVH VPS using Debian / CentOS

```bash
npx ovh-vps-config-failover gen -i eth0 -v
```

![ovh-vps-config-failover on vps](https://github.com/UrielCh/api-ovh-node/blob/master/samples/ressources/ovh-vps-config-failover.gif?raw=true "preview")

## install nodejs

[samples doc](https://github.com/UrielCh/api-ovh-node/blob/master/samples/README.md)
[nvm setup doc](https://github.com/nvm-sh/nvm)
