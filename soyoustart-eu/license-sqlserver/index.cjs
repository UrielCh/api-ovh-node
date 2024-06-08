"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /license/sqlserver Models
 */
function proxyLicenseSqlserver(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseSqlserver = proxyLicenseSqlserver;
exports.default = proxyLicenseSqlserver;
