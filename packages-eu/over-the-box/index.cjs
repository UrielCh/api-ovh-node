"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildOvhProxy = require("@ovh-api/common").buildOvhProxy;

/**
 * END API /overTheBox Models
 */
function proxyOverTheBox(ovhEngine) {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
exports.proxyOverTheBox = proxyOverTheBox;
exports.default = proxyOverTheBox;
