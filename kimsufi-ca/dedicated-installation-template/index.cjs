"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /dedicated/installationTemplate Models
 */
function proxyDedicatedInstallationTemplate(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
exports.proxyDedicatedInstallationTemplate = proxyDedicatedInstallationTemplate;
exports.default = proxyDedicatedInstallationTemplate;
