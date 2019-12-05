"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /dedicated/installationTemplate Models
 */
function proxyDedicatedInstallationTemplate(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedInstallationTemplate = proxyDedicatedInstallationTemplate;
exports.default = proxyDedicatedInstallationTemplate;
