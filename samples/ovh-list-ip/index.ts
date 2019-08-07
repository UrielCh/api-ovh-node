import ApiIp from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

// accessRules can accepte rules separeted by comma, or an array of rules
// certCache save on disque the issued certificat for next program call.
const engine = new Ovh({accessRules: 'GET /ip, GET /me', certCache: 'secretToken.json'});

/**
 * you can build and api object to store all the sub-api you will used
 */
const api = {
    ip: ApiIp(engine)
    // me: ApiMe(engine)
    // cloud: ApiCloud(engine)
    // ...
}

/**
 * Using classic syntax
 * leave the OVH calls clearly available in the source code.
 */
async function printIP() {
    const ips = await api.ip.get('/ip')();
    return ips;
}

/**
 * Using Proxy object
 * shorter syntax
 */
async function printIPProxy() {
    const ips = await api.ip.$get();
    return ips;
}

printIP().then(console.log)
