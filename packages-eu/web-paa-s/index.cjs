const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /webPaaS Models
 */
function proxyWebPaaS(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/webPaaS');
}
exports.proxyWebPaaS = proxyWebPaaS;
exports.default = proxyWebPaaS;
