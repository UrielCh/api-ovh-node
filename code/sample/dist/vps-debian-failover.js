"use strict";
// need the followig deps:
// npm install @ovh-api/api @ovh-api/vps fs-extra
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const fs_extra_1 = require("fs-extra");
const vps_1 = require("@ovh-api/vps");
const api_1 = __importDefault(require("@ovh-api/api"));
async function main() {
    const ifaces = os_1.networkInterfaces();
    if (!ifaces)
        throw 'os.networkInterfaces() failed';
    if (!ifaces['ens3'])
        throw 'No ens3 netword interface';
    const mainIP = ifaces['ens3'].filter(a => a.family == 'IPv4')[0].address;
    if (!mainIP)
        throw 'No ens3 has no IPv4';
    console.log(`Your main IP is ${mainIP}`);
    const hosts = await fs_extra_1.readFile('/etc/hosts', 'utf8');
    const m = hosts.match(/127.0.1.1\s+([a-z0-9]+\.ovh\.net)/);
    if (!m)
        throw 'No vps hostname in found in /etc/hosts';
    const serviceName = m[1];
    let ovh = new api_1.default({ accessRules: `GET /vps/${serviceName}/ips` });
    const vps = new vps_1.ApiVps(ovh);
    console.log({ serviceName });
    let data = await vps.get('/vps/{serviceName}/ips', { serviceName });
    let confFile = '';
    const ipFo = data.filter(a => a != mainIP).filter(a => !~a.indexOf(':'));
    console.log(`TOTAL IP: ${data.length} FO: ${ipFo.length}`);
    for (var i = 0; i < ipFo.length; i++) {
        confFile += `auto ens3:${i}
 iface ens3:${i + 1} inet static
 address ${ipFo[i]}
 netmask 255.255.255.255
 broadcast ${ipFo[i]}

`;
    }
    await fs_extra_1.writeFile('51-fo', confFile, { mode: 0o644 });
    console.log('51-fo Generated');
    console.log('');
    console.log('mv 51-fo  /etc/network/interfaces.d/');
}
main().then(console.log, console.error);
//# sourceMappingURL=vps-debian-failover.js.map