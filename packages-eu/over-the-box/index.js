"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ovh-api/common");
/**
 * END API /overTheBox Models
 */
function proxyOverTheBox(ovhEngine) {
    return common_1.buildOvhProxy(ovhEngine, '/overTheBox');
}
exports.proxyOverTheBox = proxyOverTheBox;
exports.default = proxyOverTheBox;
