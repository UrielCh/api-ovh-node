"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /cluster/hadoop Models
 */
function proxyClusterHadoop(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/cluster');
}
exports.proxyClusterHadoop = proxyClusterHadoop;
exports.default = proxyClusterHadoop;
