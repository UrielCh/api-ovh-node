"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /license/sqlserver Models
 */
function proxyLicenseSqlserver(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/license');
}
exports.proxyLicenseSqlserver = proxyLicenseSqlserver;
exports.default = proxyLicenseSqlserver;
