const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /hosting/web Models
 */
function proxyHostingWeb(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/hosting');
}
exports.proxyHostingWeb = proxyHostingWeb;
exports.default = proxyHostingWeb;
