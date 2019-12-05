"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /distribution/image Models
 */
function proxyDistributionImage(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/distribution');
}
exports.proxyDistributionImage = proxyDistributionImage;
exports.default = proxyDistributionImage;
