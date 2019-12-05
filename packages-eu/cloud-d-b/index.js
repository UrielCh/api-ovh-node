"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cloudDB Models
 */
function proxyCloudDB(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cloudDB');
}
exports.proxyCloudDB = proxyCloudDB;
exports.default = proxyCloudDB;
