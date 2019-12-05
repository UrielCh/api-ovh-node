"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /sslGateway Models
 */
function proxySslGateway(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/sslGateway');
}
exports.proxySslGateway = proxySslGateway;
exports.default = proxySslGateway;
