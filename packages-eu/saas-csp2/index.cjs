const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /saas/csp2 Models
 */
function proxySaasCsp2(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/saas');
}
exports.proxySaasCsp2 = proxySaasCsp2;
exports.default = proxySaasCsp2;
