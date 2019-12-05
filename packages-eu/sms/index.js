"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /sms Models
 */
function proxySms(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/sms');
}
exports.proxySms = proxySms;
exports.default = proxySms;
