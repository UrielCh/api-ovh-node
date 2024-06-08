const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /overTheBox Models
 */
function proxyOverTheBox(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
exports.proxyOverTheBox = proxyOverTheBox;
exports.default = proxyOverTheBox;
