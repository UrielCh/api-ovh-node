# @ovh-api/sample

check src folder for code sample

## configure debian VPS ip failover with nodejs

```bash
apt-get update && \
apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common && \
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash && \
apt-get update && \
export NVM_DIR="$HOME/.nvm" && \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
nvm install 12 && \
npm install @ovh-api/api @ovh-api/vps fs-extra && \
curl https://raw.githubusercontent.com/UrielCh/api-ovh-node/master/code/sample/dist/vps-debian-failover.js > fo.js && \
node fo.js && \
mv 51-fo  /etc/network/interfaces.d/

reboot
```
