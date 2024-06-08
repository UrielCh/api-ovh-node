"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /cluster/hadoop Models
 */
function proxyClusterHadoop(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/cluster');
}
exports.proxyClusterHadoop = proxyClusterHadoop;
exports.default = proxyClusterHadoop;
