"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /ssl Models
 */
function proxySsl(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/ssl');
}
exports.proxySsl = proxySsl;
exports.default = proxySsl;
