"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cdn/webstorage Models
 */
function proxyCdnWebstorage(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cdn');
}
exports.proxyCdnWebstorage = proxyCdnWebstorage;
exports.default = proxyCdnWebstorage;
