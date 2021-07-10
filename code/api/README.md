# Cutting edge client for OVH cloud APIs

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/common.svg?style=api)](https://www.npmjs.org/package/@ovh-api/api)

This OvhCloud API client intended to match the largest OVH customer needs and tested in the worsts conditions.

These node modules bring Ovh cloud API documentation directly within your IDE.

* Api call documentations.
* Mandatory / Optional parameters.
* Parameters types.
* Return types.

This module enforces OVH API prototyping; you can only call a function if you provide the correct argument.

## Quick start

Each OVH API endpoint has a related package, and each of them contains a working code sample. If you want to start with:
* telephony see: [@ovh-api/telephony](https://www.npmjs.com/package/@ovh-api/telephony)
* hosting see: [@ovh-api/hosting-web](https://www.npmjs.com/package/@ovh-api/hosting-web)
* ...hundreds of packages are available 
* see [OVH Europe](https://www.npmjs.com/search?q=%40ovh-api)
* see [OVH USA](https://www.npmjs.com/search?q=%40ovh-api-us)
* see [OVH Canada](https://www.npmjs.com/search?q=%40ovh-api-ca)
* see [SoYouStart Europe](https://www.npmjs.com/search?q=%40ovh-soyoustart)
* see [SoYouStart Canada](https://www.npmjs.com/search?q=%40ovh-soyoustart-ca)
* see [kimsufi Europe](https://www.npmjs.com/search?q=%40ovh-kimsufi)
* see [kimsufi Canada](https://www.npmjs.com/search?q=%40ovh-kimsufi-ca)

## Basic

This module takes care of all of the OVH certificate's extra steps.
To get started, no need to take care of the OVH Authentification; This API will open the required webpage on your screen.

This Ovh API client uses a compact and intuitive syntax to works, take any API call from an OVH swagger, and convert it to code like this:

For example with the API **dbaas** from [here](https://api.ovh.com/console/#/dbaas/logs):

The call: `GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}` will be call like this:

```typescript
    const archive = await dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).archive.$(archiveId).$get();
    // call API      GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
```

The API code is matching the raw query as must as Javascript can.

### Factorize API calls

if you have a lots of call with the same prefix example:

* `GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert`
* `GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`
* `PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`
* `DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}`

> */dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert* prefixing all HTTP path.

You can factorize thoses call like this:

```typescript
const alertApi = dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).alert;
const ids = await alertApi.$get();
for (const id of ids) {
    const alert = await alertApi.$(id).$get();
    if (alert.conditionType === 'FIELD_CONTENT_VALUE')
        await alertApi.$(id).$delete();
    else if (alert.conditionType === 'MESSAGE_COUNT')
        await alertApi.$(id).$put({title: 'title 2'});
}
```

For a multi-threaded version:

```typescript
const alertApi = dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).alert;
const ids = await alertApi.$get();
await Promise.all(ids, async(id) => {
    const alert = await alertApi.$(id).$get();
    if (alert.conditionType === 'FIELD_CONTENT_VALUE')
        await alertApi.$(id).$delete();
    else if (alert.conditionType === 'MESSAGE_COUNT')
        await alertApi.$(id).$put({title: 'title 2'});
});
```

For a 3-threaded version using Bluebird:

```typescript
const alertApi = dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).alert;
const ids = await alertApi.$get();
await Bluebird.map(ids, async(id) => {
    const alert = await alertApi.$(id).$get();
    if (alert.conditionType === 'FIELD_CONTENT_VALUE')
        await alertApi.$(id).$delete();
    else if (alert.conditionType === 'MESSAGE_COUNT')
        await alertApi.$(id).$put({title: 'title 2'});
}, {concurenty: 3});
```

### Cache usage

The API contains a default in memory cache that is very easy to activate, using the previous sample:

```typescript
const alertApi = dbaas.logs.$(serviceName).output.graylog.stream.$(streamId).alert;
// enable and configure cache
alertApi.$cache({size:20000, count: 100, ttl: 60 * 60});
// first call will populate the cache
let ids = await alertApi.$get();
// second call will use the cache
ids = await alertApi.$get();
// a delete will discard the previouly cached value
await alertApi.$(id[0]).$delete()
// repopulate the cache.
ids = await alertApi.$get();
```

### Certificate management

The API can query for a new certificate by opening a new browser.

If you provide a `certCache` option, the activated ConsumerKey will be store in a disk cache file.


### Retries management

If you have a connexion error, the API will try to recover up to 10 times by default and more using `maxRetry` options.

## Interactive usage

```typescript
import ApiIp from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

// accessRules can accepte rules separeted by comma, or an array of rules
// certCache save on disque the issued certificat for next program call.
const engine = new Ovh({accessRules: 'GET /ip, GET /me', certCache: 'secretToken.json'});

/**
 * You can build an API object to store all the sub-API you will use
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
    // call GET /api/ip/
    return await api.ip.$get();
}

printIP().then(console.log)

```

## Available packages

### Packages for API OvhCloud in Europe

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/all-dom.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/all-dom) *Api @ovh-api/all-dom* Add typing to to ovh api all-dom
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/analytics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/analytics) *Api @ovh-api/analytics* Add typing to to ovh api analytics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/auth) *Api @ovh-api/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/caas-containers.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/caas-containers) *Api @ovh-api/caas-containers* Add typing to to ovh api caas-containers
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/caas-registry.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/caas-registry) *Api @ovh-api/caas-registry* Add typing to to ovh api caas-registry
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-dedicated) *Api @ovh-api/cdn-dedicated* Add typing to to ovh api cdn-dedicated
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-website.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-website) *Api @ovh-api/cdn-website* Add typing to to ovh api cdn-website
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-webstorage.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-webstorage) *Api @ovh-api/cdn-webstorage* Add typing to to ovh api cdn-webstorage
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cloud) *Api @ovh-api/cloud* Add typing to to ovh api cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cloud-d-b.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cloud-d-b) *Api @ovh-api/cloud-d-b* Add typing to to ovh api cloud-d-b
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cluster-hadoop.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cluster-hadoop) *Api @ovh-api/cluster-hadoop* Add typing to to ovh api cluster-hadoop
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/connectivity.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/connectivity) *Api @ovh-api/connectivity* Add typing to to ovh api connectivity
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/contact.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/contact) *Api @ovh-api/contact* Add typing to to ovh api contact
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dbaas-logs) *Api @ovh-api/dbaas-logs* Add typing to to ovh api dbaas-logs
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dbaas-queue) *Api @ovh-api/dbaas-queue* Add typing to to ovh api dbaas-queue
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dbaas-timeseries) *Api @ovh-api/dbaas-timeseries* Add typing to to ovh api dbaas-timeseries
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-ceph) *Api @ovh-api/dedicated-ceph* Add typing to to ovh api dedicated-ceph
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-cloud) *Api @ovh-api/dedicated-cloud* Add typing to to ovh api dedicated-cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-housing) *Api @ovh-api/dedicated-housing* Add typing to to ovh api dedicated-housing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-installation-template) *Api @ovh-api/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-nas) *Api @ovh-api/dedicated-nas* Add typing to to ovh api dedicated-nas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-nasha) *Api @ovh-api/dedicated-nasha* Add typing to to ovh api dedicated-nasha
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-server) *Api @ovh-api/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/deskaas) *Api @ovh-api/deskaas* Add typing to to ovh api deskaas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/distribution-image) *Api @ovh-api/distribution-image* Add typing to to ovh api distribution-image
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/domain) *Api @ovh-api/domain* Add typing to to ovh api domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-domain) *Api @ovh-api/email-domain* Add typing to to ovh api email-domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-exchange) *Api @ovh-api/email-exchange* Add typing to to ovh api email-exchange
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-mxplan) *Api @ovh-api/email-mxplan* Add typing to to ovh api email-mxplan
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-pro) *Api @ovh-api/email-pro* Add typing to to ovh api email-pro
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/freefax.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/freefax) *Api @ovh-api/freefax* Add typing to to ovh api freefax
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/horizon-view) *Api @ovh-api/horizon-view* Add typing to to ovh api horizon-view
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-private-database) *Api @ovh-api/hosting-private-database* Add typing to to ovh api hosting-private-database
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-reseller.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-reseller) *Api @ovh-api/hosting-reseller* Add typing to to ovh api hosting-reseller
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-web) *Api @ovh-api/hosting-web* Add typing to to ovh api hosting-web
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/hpcspot.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hpcspot) *Api @ovh-api/hpcspot* Add typing to to ovh api hpcspot
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip) *Api @ovh-api/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip-loadbalancing) *Api @ovh-api/ip-loadbalancing* Add typing to to ovh api ip-loadbalancing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/kube.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/kube) *Api @ovh-api/kube* Add typing to to ovh api kube
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-cloud-linux) *Api @ovh-api/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-cpanel) *Api @ovh-api/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-directadmin) *Api @ovh-api/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-office) *Api @ovh-api/license-office* Add typing to to ovh api license-office
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-plesk) *Api @ovh-api/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-redhat) *Api @ovh-api/license-redhat* Add typing to to ovh api license-redhat
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-sqlserver) *Api @ovh-api/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-virtuozzo) *Api @ovh-api/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-windows) *Api @ovh-api/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-worklight) *Api @ovh-api/license-worklight* Add typing to to ovh api license-worklight
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/me) *Api @ovh-api/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/metrics) *Api @ovh-api/metrics* Add typing to to ovh api metrics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ms-services) *Api @ovh-api/ms-services* Add typing to to ovh api ms-services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/new-account) *Api @ovh-api/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/order) *Api @ovh-api/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/over-the-box.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/over-the-box) *Api @ovh-api/over-the-box* Add typing to to ovh api over-the-box
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ovh-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ovh-cloud-connect) *Api @ovh-api/ovh-cloud-connect* Add typing to to ovh api ovh-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/pack-siptrunk) *Api @ovh-api/pack-siptrunk* Add typing to to ovh api pack-siptrunk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/pack-xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/pack-xdsl) *Api @ovh-api/pack-xdsl* Add typing to to ovh api pack-xdsl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/partner.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/partner) *Api @ovh-api/partner* Add typing to to ovh api partner
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/partners.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/partners) *Api @ovh-api/partners* Add typing to to ovh api partners
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/price) *Api @ovh-api/price* Add typing to to ovh api price
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/router) *Api @ovh-api/router* Add typing to to ovh api router
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/saas-csp2.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/saas-csp2) *Api @ovh-api/saas-csp2* Add typing to to ovh api saas-csp2
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/secret.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/secret) *Api @ovh-api/secret* Add typing to to ovh api secret
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/service) *Api @ovh-api/service* Add typing to to ovh api service
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/services) *Api @ovh-api/services* Add typing to to ovh api services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/sms.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/sms) *Api @ovh-api/sms* Add typing to to ovh api sms
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ssl) *Api @ovh-api/ssl* Add typing to to ovh api ssl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ssl-gateway) *Api @ovh-api/ssl-gateway* Add typing to to ovh api ssl-gateway
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/stack-mis.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/stack-mis) *Api @ovh-api/stack-mis* Add typing to to ovh api stack-mis
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/status) *Api @ovh-api/status* Add typing to to ovh api status
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/store) *Api @ovh-api/store* Add typing to to ovh api store
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/supply-mondial-relay.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/supply-mondial-relay) *Api @ovh-api/supply-mondial-relay* Add typing to to ovh api supply-mondial-relay
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/support) *Api @ovh-api/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/telephony.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/telephony) *Api @ovh-api/telephony* Add typing to to ovh api telephony
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/veeam-cloud-connect) *Api @ovh-api/veeam-cloud-connect* Add typing to to ovh api veeam-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/veeam-veeam-enterprise.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/veeam-veeam-enterprise) *Api @ovh-api/veeam-veeam-enterprise* Add typing to to ovh api veeam-veeam-enterprise
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/vip) *Api @ovh-api/vip* Add typing to to ovh api vip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/vps) *Api @ovh-api/vps* Add typing to to ovh api vps
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/vrack) *Api @ovh-api/vrack* Add typing to to ovh api vrack
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/xdsl) *Api @ovh-api/xdsl* Add typing to to ovh api xdsl

### Packages for API OvhCloud in Canada

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/auth) *Api @ovh-api-ca/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/cdn-dedicated) *Api @ovh-api-ca/cdn-dedicated* Add typing to to ovh api cdn-dedicated
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/cloud) *Api @ovh-api-ca/cloud* Add typing to to ovh api cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dbaas-logs) *Api @ovh-api-ca/dbaas-logs* Add typing to to ovh api dbaas-logs
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-ceph) *Api @ovh-api-ca/dedicated-ceph* Add typing to to ovh api dedicated-ceph
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-cloud) *Api @ovh-api-ca/dedicated-cloud* Add typing to to ovh api dedicated-cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-housing) *Api @ovh-api-ca/dedicated-housing* Add typing to to ovh api dedicated-housing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-installation-template) *Api @ovh-api-ca/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-nas) *Api @ovh-api-ca/dedicated-nas* Add typing to to ovh api dedicated-nas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-nasha) *Api @ovh-api-ca/dedicated-nasha* Add typing to to ovh api dedicated-nasha
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-server) *Api @ovh-api-ca/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/deskaas) *Api @ovh-api-ca/deskaas* Add typing to to ovh api deskaas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/distribution-image) *Api @ovh-api-ca/distribution-image* Add typing to to ovh api distribution-image
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/domain) *Api @ovh-api-ca/domain* Add typing to to ovh api domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/email-exchange) *Api @ovh-api-ca/email-exchange* Add typing to to ovh api email-exchange
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/email-mxplan) *Api @ovh-api-ca/email-mxplan* Add typing to to ovh api email-mxplan
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/horizon-view) *Api @ovh-api-ca/horizon-view* Add typing to to ovh api horizon-view
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/hosting-private-database) *Api @ovh-api-ca/hosting-private-database* Add typing to to ovh api hosting-private-database
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/hosting-web) *Api @ovh-api-ca/hosting-web* Add typing to to ovh api hosting-web
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ip) *Api @ovh-api-ca/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ip-loadbalancing) *Api @ovh-api-ca/ip-loadbalancing* Add typing to to ovh api ip-loadbalancing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-cloud-linux) *Api @ovh-api-ca/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-cpanel) *Api @ovh-api-ca/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-directadmin) *Api @ovh-api-ca/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-office) *Api @ovh-api-ca/license-office* Add typing to to ovh api license-office
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-plesk) *Api @ovh-api-ca/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-redhat) *Api @ovh-api-ca/license-redhat* Add typing to to ovh api license-redhat
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-sqlserver) *Api @ovh-api-ca/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-virtuozzo) *Api @ovh-api-ca/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-windows) *Api @ovh-api-ca/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/license-worklight) *Api @ovh-api-ca/license-worklight* Add typing to to ovh api license-worklight
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/me) *Api @ovh-api-ca/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ms-services) *Api @ovh-api-ca/ms-services* Add typing to to ovh api ms-services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/new-account) *Api @ovh-api-ca/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/order) *Api @ovh-api-ca/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/price) *Api @ovh-api-ca/price* Add typing to to ovh api price
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/router) *Api @ovh-api-ca/router* Add typing to to ovh api router
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/service) *Api @ovh-api-ca/service* Add typing to to ovh api service
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ssl) *Api @ovh-api-ca/ssl* Add typing to to ovh api ssl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ssl-gateway) *Api @ovh-api-ca/ssl-gateway* Add typing to to ovh api ssl-gateway
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/status) *Api @ovh-api-ca/status* Add typing to to ovh api status
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/support) *Api @ovh-api-ca/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/veeam-cloud-connect) *Api @ovh-api-ca/veeam-cloud-connect* Add typing to to ovh api veeam-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vip) *Api @ovh-api-ca/vip* Add typing to to ovh api vip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vps) *Api @ovh-api-ca/vps* Add typing to to ovh api vps
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/vrack) *Api @ovh-api-ca/vrack* Add typing to to ovh api vrack

### Packages for API OvhCloud in the USA

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/auth) *Api @ovh-api-us/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/cloud) *Api @ovh-api-us/cloud* Add typing to to ovh api cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-logs) *Api @ovh-api-us/dbaas-logs* Add typing to to ovh api dbaas-logs
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-queue) *Api @ovh-api-us/dbaas-queue* Add typing to to ovh api dbaas-queue
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-timeseries) *Api @ovh-api-us/dbaas-timeseries* Add typing to to ovh api dbaas-timeseries
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-ceph) *Api @ovh-api-us/dedicated-ceph* Add typing to to ovh api dedicated-ceph
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-cloud) *Api @ovh-api-us/dedicated-cloud* Add typing to to ovh api dedicated-cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-housing) *Api @ovh-api-us/dedicated-housing* Add typing to to ovh api dedicated-housing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-installation-template) *Api @ovh-api-us/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-nas) *Api @ovh-api-us/dedicated-nas* Add typing to to ovh api dedicated-nas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-nasha) *Api @ovh-api-us/dedicated-nasha* Add typing to to ovh api dedicated-nasha
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-server) *Api @ovh-api-us/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ip) *Api @ovh-api-us/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ip-loadbalancing) *Api @ovh-api-us/ip-loadbalancing* Add typing to to ovh api ip-loadbalancing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-cloud-linux) *Api @ovh-api-us/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-cpanel) *Api @ovh-api-us/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-directadmin) *Api @ovh-api-us/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-office) *Api @ovh-api-us/license-office* Add typing to to ovh api license-office
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-plesk) *Api @ovh-api-us/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-redhat) *Api @ovh-api-us/license-redhat* Add typing to to ovh api license-redhat
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-sqlserver) *Api @ovh-api-us/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-virtuozzo) *Api @ovh-api-us/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-windows) *Api @ovh-api-us/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-worklight) *Api @ovh-api-us/license-worklight* Add typing to to ovh api license-worklight
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/me) *Api @ovh-api-us/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/metrics) *Api @ovh-api-us/metrics* Add typing to to ovh api metrics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/new-account) *Api @ovh-api-us/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/order) *Api @ovh-api-us/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/secret.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/secret) *Api @ovh-api-us/secret* Add typing to to ovh api secret
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/service) *Api @ovh-api-us/service* Add typing to to ovh api service
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/services) *Api @ovh-api-us/services* Add typing to to ovh api services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/ssl) *Api @ovh-api-us/ssl* Add typing to to ovh api ssl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/support) *Api @ovh-api-us/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/veeam-veeam-enterprise.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/veeam-veeam-enterprise) *Api @ovh-api-us/veeam-veeam-enterprise* Add typing to to ovh api veeam-veeam-enterprise
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/vps) *Api @ovh-api-us/vps* Add typing to to ovh api vps
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/vrack) *Api @ovh-api-us/vrack* Add typing to to ovh api vrack

### Packages for API SoYouStart in Europe

* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/all-dom.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/all-dom) *Api @ovh-soyoustart/all-dom* Add typing to to ovh api all-dom
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/analytics.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/analytics) *Api @ovh-soyoustart/analytics* Add typing to to ovh api analytics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/auth) *Api @ovh-soyoustart/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/caas-containers.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/caas-containers) *Api @ovh-soyoustart/caas-containers* Add typing to to ovh api caas-containers
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/caas-registry.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/caas-registry) *Api @ovh-soyoustart/caas-registry* Add typing to to ovh api caas-registry
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cdn-dedicated) *Api @ovh-soyoustart/cdn-dedicated* Add typing to to ovh api cdn-dedicated
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cdn-website.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cdn-website) *Api @ovh-soyoustart/cdn-website* Add typing to to ovh api cdn-website
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cdn-webstorage.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cdn-webstorage) *Api @ovh-soyoustart/cdn-webstorage* Add typing to to ovh api cdn-webstorage
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cloud) *Api @ovh-soyoustart/cloud* Add typing to to ovh api cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cloud-d-b.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cloud-d-b) *Api @ovh-soyoustart/cloud-d-b* Add typing to to ovh api cloud-d-b
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cluster-hadoop.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cluster-hadoop) *Api @ovh-soyoustart/cluster-hadoop* Add typing to to ovh api cluster-hadoop
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/connectivity.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/connectivity) *Api @ovh-soyoustart/connectivity* Add typing to to ovh api connectivity
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/contact.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/contact) *Api @ovh-soyoustart/contact* Add typing to to ovh api contact
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dbaas-logs) *Api @ovh-soyoustart/dbaas-logs* Add typing to to ovh api dbaas-logs
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dbaas-queue) *Api @ovh-soyoustart/dbaas-queue* Add typing to to ovh api dbaas-queue
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dbaas-timeseries) *Api @ovh-soyoustart/dbaas-timeseries* Add typing to to ovh api dbaas-timeseries
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-ceph) *Api @ovh-soyoustart/dedicated-ceph* Add typing to to ovh api dedicated-ceph
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-cloud) *Api @ovh-soyoustart/dedicated-cloud* Add typing to to ovh api dedicated-cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-housing) *Api @ovh-soyoustart/dedicated-housing* Add typing to to ovh api dedicated-housing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-installation-template) *Api @ovh-soyoustart/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-nas) *Api @ovh-soyoustart/dedicated-nas* Add typing to to ovh api dedicated-nas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-nasha) *Api @ovh-soyoustart/dedicated-nasha* Add typing to to ovh api dedicated-nasha
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-server) *Api @ovh-soyoustart/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/deskaas) *Api @ovh-soyoustart/deskaas* Add typing to to ovh api deskaas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/distribution-image) *Api @ovh-soyoustart/distribution-image* Add typing to to ovh api distribution-image
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/domain) *Api @ovh-soyoustart/domain* Add typing to to ovh api domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/email-domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/email-domain) *Api @ovh-soyoustart/email-domain* Add typing to to ovh api email-domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/email-exchange) *Api @ovh-soyoustart/email-exchange* Add typing to to ovh api email-exchange
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/email-mxplan) *Api @ovh-soyoustart/email-mxplan* Add typing to to ovh api email-mxplan
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/email-pro) *Api @ovh-soyoustart/email-pro* Add typing to to ovh api email-pro
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/freefax.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/freefax) *Api @ovh-soyoustart/freefax* Add typing to to ovh api freefax
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/horizon-view) *Api @ovh-soyoustart/horizon-view* Add typing to to ovh api horizon-view
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/hosting-private-database) *Api @ovh-soyoustart/hosting-private-database* Add typing to to ovh api hosting-private-database
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/hosting-reseller.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/hosting-reseller) *Api @ovh-soyoustart/hosting-reseller* Add typing to to ovh api hosting-reseller
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/hosting-web) *Api @ovh-soyoustart/hosting-web* Add typing to to ovh api hosting-web
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/hpcspot.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/hpcspot) *Api @ovh-soyoustart/hpcspot* Add typing to to ovh api hpcspot
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ip) *Api @ovh-soyoustart/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ip-loadbalancing) *Api @ovh-soyoustart/ip-loadbalancing* Add typing to to ovh api ip-loadbalancing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/kube.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/kube) *Api @ovh-soyoustart/kube* Add typing to to ovh api kube
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-cloud-linux) *Api @ovh-soyoustart/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-cpanel) *Api @ovh-soyoustart/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-directadmin) *Api @ovh-soyoustart/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-office) *Api @ovh-soyoustart/license-office* Add typing to to ovh api license-office
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-plesk) *Api @ovh-soyoustart/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-redhat) *Api @ovh-soyoustart/license-redhat* Add typing to to ovh api license-redhat
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-sqlserver) *Api @ovh-soyoustart/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-virtuozzo) *Api @ovh-soyoustart/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-windows) *Api @ovh-soyoustart/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-worklight) *Api @ovh-soyoustart/license-worklight* Add typing to to ovh api license-worklight
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/me) *Api @ovh-soyoustart/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/metrics) *Api @ovh-soyoustart/metrics* Add typing to to ovh api metrics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ms-services) *Api @ovh-soyoustart/ms-services* Add typing to to ovh api ms-services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/new-account) *Api @ovh-soyoustart/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/order) *Api @ovh-soyoustart/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/over-the-box.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/over-the-box) *Api @ovh-soyoustart/over-the-box* Add typing to to ovh api over-the-box
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ovh-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ovh-cloud-connect) *Api @ovh-soyoustart/ovh-cloud-connect* Add typing to to ovh api ovh-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/pack-siptrunk) *Api @ovh-soyoustart/pack-siptrunk* Add typing to to ovh api pack-siptrunk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/pack-xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/pack-xdsl) *Api @ovh-soyoustart/pack-xdsl* Add typing to to ovh api pack-xdsl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/partners.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/partners) *Api @ovh-soyoustart/partners* Add typing to to ovh api partners
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/price) *Api @ovh-soyoustart/price* Add typing to to ovh api price
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/router) *Api @ovh-soyoustart/router* Add typing to to ovh api router
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/saas-csp2.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/saas-csp2) *Api @ovh-soyoustart/saas-csp2* Add typing to to ovh api saas-csp2
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/secret.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/secret) *Api @ovh-soyoustart/secret* Add typing to to ovh api secret
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/service) *Api @ovh-soyoustart/service* Add typing to to ovh api service
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/sms.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/sms) *Api @ovh-soyoustart/sms* Add typing to to ovh api sms
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ssl) *Api @ovh-soyoustart/ssl* Add typing to to ovh api ssl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/ssl-gateway) *Api @ovh-soyoustart/ssl-gateway* Add typing to to ovh api ssl-gateway
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/stack-mis.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/stack-mis) *Api @ovh-soyoustart/stack-mis* Add typing to to ovh api stack-mis
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/status) *Api @ovh-soyoustart/status* Add typing to to ovh api status
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/store) *Api @ovh-soyoustart/store* Add typing to to ovh api store
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/supply-mondial-relay.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/supply-mondial-relay) *Api @ovh-soyoustart/supply-mondial-relay* Add typing to to ovh api supply-mondial-relay
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/support) *Api @ovh-soyoustart/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/telephony.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/telephony) *Api @ovh-soyoustart/telephony* Add typing to to ovh api telephony
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/veeam-cloud-connect) *Api @ovh-soyoustart/veeam-cloud-connect* Add typing to to ovh api veeam-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/veeam-veeam-enterprise.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/veeam-veeam-enterprise) *Api @ovh-soyoustart/veeam-veeam-enterprise* Add typing to to ovh api veeam-veeam-enterprise
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/vip) *Api @ovh-soyoustart/vip* Add typing to to ovh api vip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/vps) *Api @ovh-soyoustart/vps* Add typing to to ovh api vps
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/vrack) *Api @ovh-soyoustart/vrack* Add typing to to ovh api vrack
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/xdsl) *Api @ovh-soyoustart/xdsl* Add typing to to ovh api xdsl

### Packages for API SoYouStart in Canada

* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/auth) *Api @ovh-soyoustart-ca/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/dedicated-installation-template) *Api @ovh-soyoustart-ca/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/dedicated-server) *Api @ovh-soyoustart-ca/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/ip) *Api @ovh-soyoustart-ca/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-cloud-linux) *Api @ovh-soyoustart-ca/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-cpanel) *Api @ovh-soyoustart-ca/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-directadmin) *Api @ovh-soyoustart-ca/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-plesk) *Api @ovh-soyoustart-ca/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-sqlserver) *Api @ovh-soyoustart-ca/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-virtuozzo) *Api @ovh-soyoustart-ca/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/license-windows) *Api @ovh-soyoustart-ca/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/me) *Api @ovh-soyoustart-ca/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/new-account) *Api @ovh-soyoustart-ca/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/order) *Api @ovh-soyoustart-ca/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/price) *Api @ovh-soyoustart-ca/price* Add typing to to ovh api price
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/support) *Api @ovh-soyoustart-ca/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/veeam-cloud-connect) *Api @ovh-soyoustart-ca/veeam-cloud-connect* Add typing to to ovh api veeam-cloud-connect

### Packages for API Kimsufi in Europe

* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/all-dom.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/all-dom) *Api @ovh-kimsufi/all-dom* Add typing to to ovh api all-dom
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/analytics.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/analytics) *Api @ovh-kimsufi/analytics* Add typing to to ovh api analytics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/auth) *Api @ovh-kimsufi/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/caas-containers.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/caas-containers) *Api @ovh-kimsufi/caas-containers* Add typing to to ovh api caas-containers
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/caas-registry.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/caas-registry) *Api @ovh-kimsufi/caas-registry* Add typing to to ovh api caas-registry
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cdn-dedicated) *Api @ovh-kimsufi/cdn-dedicated* Add typing to to ovh api cdn-dedicated
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cdn-website.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cdn-website) *Api @ovh-kimsufi/cdn-website* Add typing to to ovh api cdn-website
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cdn-webstorage.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cdn-webstorage) *Api @ovh-kimsufi/cdn-webstorage* Add typing to to ovh api cdn-webstorage
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cloud) *Api @ovh-kimsufi/cloud* Add typing to to ovh api cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cloud-d-b.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cloud-d-b) *Api @ovh-kimsufi/cloud-d-b* Add typing to to ovh api cloud-d-b
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cluster-hadoop.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cluster-hadoop) *Api @ovh-kimsufi/cluster-hadoop* Add typing to to ovh api cluster-hadoop
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/connectivity.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/connectivity) *Api @ovh-kimsufi/connectivity* Add typing to to ovh api connectivity
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/contact.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/contact) *Api @ovh-kimsufi/contact* Add typing to to ovh api contact
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dbaas-logs) *Api @ovh-kimsufi/dbaas-logs* Add typing to to ovh api dbaas-logs
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dbaas-queue) *Api @ovh-kimsufi/dbaas-queue* Add typing to to ovh api dbaas-queue
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dbaas-timeseries) *Api @ovh-kimsufi/dbaas-timeseries* Add typing to to ovh api dbaas-timeseries
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-ceph) *Api @ovh-kimsufi/dedicated-ceph* Add typing to to ovh api dedicated-ceph
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-cloud) *Api @ovh-kimsufi/dedicated-cloud* Add typing to to ovh api dedicated-cloud
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-housing) *Api @ovh-kimsufi/dedicated-housing* Add typing to to ovh api dedicated-housing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-installation-template) *Api @ovh-kimsufi/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-nas.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-nas) *Api @ovh-kimsufi/dedicated-nas* Add typing to to ovh api dedicated-nas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-nasha.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-nasha) *Api @ovh-kimsufi/dedicated-nasha* Add typing to to ovh api dedicated-nasha
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dedicated-server) *Api @ovh-kimsufi/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/deskaas.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/deskaas) *Api @ovh-kimsufi/deskaas* Add typing to to ovh api deskaas
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/distribution-image) *Api @ovh-kimsufi/distribution-image* Add typing to to ovh api distribution-image
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/domain) *Api @ovh-kimsufi/domain* Add typing to to ovh api domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-domain) *Api @ovh-kimsufi/email-domain* Add typing to to ovh api email-domain
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-exchange) *Api @ovh-kimsufi/email-exchange* Add typing to to ovh api email-exchange
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-mxplan) *Api @ovh-kimsufi/email-mxplan* Add typing to to ovh api email-mxplan
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-pro) *Api @ovh-kimsufi/email-pro* Add typing to to ovh api email-pro
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/freefax.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/freefax) *Api @ovh-kimsufi/freefax* Add typing to to ovh api freefax
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/horizon-view) *Api @ovh-kimsufi/horizon-view* Add typing to to ovh api horizon-view
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/hosting-private-database.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/hosting-private-database) *Api @ovh-kimsufi/hosting-private-database* Add typing to to ovh api hosting-private-database
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/hosting-reseller.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/hosting-reseller) *Api @ovh-kimsufi/hosting-reseller* Add typing to to ovh api hosting-reseller
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/hosting-web) *Api @ovh-kimsufi/hosting-web* Add typing to to ovh api hosting-web
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/hpcspot.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/hpcspot) *Api @ovh-kimsufi/hpcspot* Add typing to to ovh api hpcspot
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ip) *Api @ovh-kimsufi/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ip-loadbalancing) *Api @ovh-kimsufi/ip-loadbalancing* Add typing to to ovh api ip-loadbalancing
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/kube.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/kube) *Api @ovh-kimsufi/kube* Add typing to to ovh api kube
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-cloud-linux) *Api @ovh-kimsufi/license-cloud-linux* Add typing to to ovh api license-cloud-linux
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-cpanel) *Api @ovh-kimsufi/license-cpanel* Add typing to to ovh api license-cpanel
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-directadmin) *Api @ovh-kimsufi/license-directadmin* Add typing to to ovh api license-directadmin
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-office) *Api @ovh-kimsufi/license-office* Add typing to to ovh api license-office
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-plesk.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-plesk) *Api @ovh-kimsufi/license-plesk* Add typing to to ovh api license-plesk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-redhat) *Api @ovh-kimsufi/license-redhat* Add typing to to ovh api license-redhat
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-sqlserver.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-sqlserver) *Api @ovh-kimsufi/license-sqlserver* Add typing to to ovh api license-sqlserver
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-virtuozzo) *Api @ovh-kimsufi/license-virtuozzo* Add typing to to ovh api license-virtuozzo
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-windows) *Api @ovh-kimsufi/license-windows* Add typing to to ovh api license-windows
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/license-worklight) *Api @ovh-kimsufi/license-worklight* Add typing to to ovh api license-worklight
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/me) *Api @ovh-kimsufi/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/metrics) *Api @ovh-kimsufi/metrics* Add typing to to ovh api metrics
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ms-services) *Api @ovh-kimsufi/ms-services* Add typing to to ovh api ms-services
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/new-account) *Api @ovh-kimsufi/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/order) *Api @ovh-kimsufi/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/over-the-box.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/over-the-box) *Api @ovh-kimsufi/over-the-box* Add typing to to ovh api over-the-box
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ovh-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ovh-cloud-connect) *Api @ovh-kimsufi/ovh-cloud-connect* Add typing to to ovh api ovh-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/pack-siptrunk.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/pack-siptrunk) *Api @ovh-kimsufi/pack-siptrunk* Add typing to to ovh api pack-siptrunk
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/pack-xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/pack-xdsl) *Api @ovh-kimsufi/pack-xdsl* Add typing to to ovh api pack-xdsl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/partners.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/partners) *Api @ovh-kimsufi/partners* Add typing to to ovh api partners
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/price) *Api @ovh-kimsufi/price* Add typing to to ovh api price
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/router) *Api @ovh-kimsufi/router* Add typing to to ovh api router
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/saas-csp2.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/saas-csp2) *Api @ovh-kimsufi/saas-csp2* Add typing to to ovh api saas-csp2
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/secret.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/secret) *Api @ovh-kimsufi/secret* Add typing to to ovh api secret
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/service) *Api @ovh-kimsufi/service* Add typing to to ovh api service
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/sms.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/sms) *Api @ovh-kimsufi/sms* Add typing to to ovh api sms
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ssl.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ssl) *Api @ovh-kimsufi/ssl* Add typing to to ovh api ssl
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ssl-gateway) *Api @ovh-kimsufi/ssl-gateway* Add typing to to ovh api ssl-gateway
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/stack-mis.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/stack-mis) *Api @ovh-kimsufi/stack-mis* Add typing to to ovh api stack-mis
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/status) *Api @ovh-kimsufi/status* Add typing to to ovh api status
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/store) *Api @ovh-kimsufi/store* Add typing to to ovh api store
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/supply-mondial-relay.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/supply-mondial-relay) *Api @ovh-kimsufi/supply-mondial-relay* Add typing to to ovh api supply-mondial-relay
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/support) *Api @ovh-kimsufi/support* Add typing to to ovh api support
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/telephony.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/telephony) *Api @ovh-kimsufi/telephony* Add typing to to ovh api telephony
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/veeam-cloud-connect) *Api @ovh-kimsufi/veeam-cloud-connect* Add typing to to ovh api veeam-cloud-connect
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/veeam-veeam-enterprise.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/veeam-veeam-enterprise) *Api @ovh-kimsufi/veeam-veeam-enterprise* Add typing to to ovh api veeam-veeam-enterprise
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/vip.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/vip) *Api @ovh-kimsufi/vip* Add typing to to ovh api vip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/vps.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/vps) *Api @ovh-kimsufi/vps* Add typing to to ovh api vps
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/vrack.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/vrack) *Api @ovh-kimsufi/vrack* Add typing to to ovh api vrack
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/xdsl) *Api @ovh-kimsufi/xdsl* Add typing to to ovh api xdsl

### Packages for API Kimsufi in Canada

* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/auth) *Api @ovh-kimsufi-ca/auth* Add typing to to ovh api auth
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/dedicated-installation-template) *Api @ovh-kimsufi-ca/dedicated-installation-template* Add typing to to ovh api dedicated-installation-template
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/dedicated-server.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/dedicated-server) *Api @ovh-kimsufi-ca/dedicated-server* Add typing to to ovh api dedicated-server
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/ip) *Api @ovh-kimsufi-ca/ip* Add typing to to ovh api ip
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/me) *Api @ovh-kimsufi-ca/me* Add typing to to ovh api me
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/new-account.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/new-account) *Api @ovh-kimsufi-ca/new-account* Add typing to to ovh api new-account
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/order) *Api @ovh-kimsufi-ca/order* Add typing to to ovh api order
* [![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi-ca/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi-ca/support) *Api @ovh-kimsufi-ca/support* Add typing to to ovh api support

## Samples

You can find real-life code samples can be found [here](https://github.com/UrielCh/api-ovh-node/tree/master/samples)
