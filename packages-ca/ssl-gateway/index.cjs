const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /sslGateway Models
 */
function proxySslGateway(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/sslGateway');
}
exports.proxySslGateway = proxySslGateway;
exports.default = proxySslGateway;
