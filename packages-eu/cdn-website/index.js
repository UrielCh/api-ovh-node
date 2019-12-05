"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cdn/website Models
 */
function proxyCdnWebsite(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cdn');
}
exports.proxyCdnWebsite = proxyCdnWebsite;
exports.default = proxyCdnWebsite;
