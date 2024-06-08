const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /contact Models
 */
function proxyContact(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/contact');
}
exports.proxyContact = proxyContact;
exports.default = proxyContact;
