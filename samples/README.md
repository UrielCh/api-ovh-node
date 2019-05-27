# Samples using Typescript nodejs Api

Check src folder for all codes.

## install nodejs

```bash
apt-get update && \
apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common && \
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash && \
apt-get update && \
export NVM_DIR="$HOME/.nvm" && \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
nvm install 10
```

## Configure debian VPS ip failover with a single script

```bash
npm install @ovh-api/api @ovh-api/vps fs-extra && \
curl https://raw.githubusercontent.com/UrielCh/api-ovh-node/master/code/sample/dist/vps-debian-failover.js > fo.js && \
node fo.js && \
mv 51-fo  /etc/network/interfaces.d/

reboot
```

## Download all invoice

[see ovh-download-invoices](https://github.com/UrielCh/api-ovh-node/blob/master/samples/ovh-download-invoices/ovh-download-invoices)
