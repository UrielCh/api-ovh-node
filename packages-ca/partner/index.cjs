const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /partner Models
 */
function proxyPartner(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/partner');
}
exports.proxyPartner = proxyPartner;
exports.default = proxyPartner;
