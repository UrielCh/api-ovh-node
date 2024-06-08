const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /sms Models
 */
function proxySms(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/sms');
}
exports.proxySms = proxySms;
exports.default = proxySms;
