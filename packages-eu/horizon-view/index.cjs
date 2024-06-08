const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /horizonView Models
 */
function proxyHorizonView(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/horizonView');
}
exports.proxyHorizonView = proxyHorizonView;
exports.default = proxyHorizonView;
