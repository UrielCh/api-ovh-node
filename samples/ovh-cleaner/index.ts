import ApiWeb, { hosting } from '@ovh-api/hosting-web';
import ApiDom from '@ovh-api/domain';
import ApiMe, { api } from '@ovh-api/me';
import Bluebird from 'bluebird';
import dns from 'dns';
import Ovh from '@ovh-api/api';
import program from 'commander';

const ovh = new Ovh({ accessRules: 'GET /hosting/web, GET /hosting/web/*, GET /domain, POST /hosting/web/*/terminate, GET /me/api*, DELETE /me/api*, DELETE /hosting/web/*', certCache: '../../cleanToken2.json' });
const api= {
    web: ApiWeb(ovh),
    domain: ApiDom(ovh),
    me: ApiMe(ovh),
}

let resolve4 = Bluebird.promisify(dns.resolve4);

async function cleanApiCert() {
    let credencials: api.Credential[] = [];
    let applicationMap = new Map<Number, api.Application>();
    try {
        let cnt = 0;
        let certIds = await api.me.api.credential.$get() // , {status: 'validated'}
        let total = certIds.length;
        let now = new Date().getTime();
        console.log(`Found ${total} credentials\n`)
        await Bluebird.map(certIds, async (credentialId) => {
            let credencial = await api.me.api.credential.$(credentialId).$get();
            let { expiration } = credencial;

            if (expiration && new Date(expiration).getTime() < now) {
                console.log(new Date(expiration).getTime() < now);
                console.log(`${++cnt}/${total} delete Old Cert ${credentialId} expired since ${credencial.expiration}`);
                await api.me.api.credential.$(credentialId).$delete();// ('/me/api/credential/{credentialId}', { credentialId });
            }

            total--
            let { applicationId } = credencial;
            if (!applicationMap.has(applicationId)) {
                try {
                    const app = await api.me.api.application.$(applicationId).$get();
                    applicationMap.set(applicationId, app);
                } catch (err) {
                    if (String(err).indexOf('does not exist')) {
                        console.error(`Should I delete Cert:${credentialId} linked to a non existing Application: ${applicationId} ?`)
                        // await apiMe.delete('/me/api/credential/{credentialId}', { credentialId });
                    } else {
                        console.log(err);
                    }
                }
            }
            if (applicationMap.has(applicationId)) {
                credencials.push(credencial);
            }
        }, { concurrency: 3 })
    } catch (ERROR) {
        console.log(ERROR)
    }

    console.log(`Found ${applicationMap.size} Distinct Applications\n`)

    credencials.forEach(credencial => {
        let app = applicationMap.get(credencial.applicationId);
        if (!app) {
            console.error(`Missing App ${credencial.applicationId}`);
            return;
        }
        let rules = credencial.rules.map(rule => `${rule.method} ${rule.path}`).join(',')
        console.log(`
Cert:${credencial.credentialId} App:${app.applicationId}:${app.applicationKey} Status:${app.status} Rules:${rules}
App: ${app.name} Desc:${app.description}`);
    })
}

async function cleanDomain() {
    try {
        let cnt = 0;
        let doms = await api.domain.$get()
        console.log(`${doms.length} Domaines`)
        let hostings = await api.web.web.$get()
        console.log(`${hostings.length} hostings`)
        let hdoms = new Set(doms);
        let total = hostings.length;
        hostings = hostings.filter(h => !hdoms.has(h));
        console.log(`${hostings.length}/${total} dosting have no matching domaines`);
        await Bluebird.map(hostings, async (serviceName: string) => {
            let hosting: hosting.web.Service = await api.web.web.$(serviceName).$get();
            let resolved;
            if (hosting.offer != 'start10m')
                return;
            try {
                resolved = await resolve4(serviceName);
                console.log(++cnt + ') KEEP ' + serviceName + ' resolved:' + resolved);
            } catch (e) {
                try {
                    await api.web.web.$(serviceName).terminate.$post();
                    console.log(++cnt + ') DROP ' + serviceName + " success");
                } catch (e1) {
                    console.log(++cnt + ') DROP ' + serviceName + " FAILED " + e1);
                }
            }
        }, { concurrency: 2 })
    } catch (ERROR) {
        console.log(ERROR)
    }
}

async function cleanMultiSite(webHosting?: string) {
    try {
        let cnt = 0;
        const domSet = new Set(await api.domain.$get());
        console.log(`${domSet.size} domaines acvailable in the account`)
        let hostings = webHosting ? [webHosting]: await api.web.web.$get();
        console.log(`${hostings.length} hostings will be test`)
        await Bluebird.map(hostings, async (serviceName: string) => {
            try {
                const hostingInfo = await api.web.web.$(serviceName).$get();
                if (hostingInfo.offer === 'start10m') {
                    // skip Start 10M
                    return;
                }
                const validIPs = new Set();
                validIPs.add(hostingInfo.clusterIp);
                hostingInfo.countriesIp?.forEach(e => validIPs.add(e.ip));
                let attached = await api.web.web.$(serviceName).attachedDomain.$get();
                // console.log(attached.join(', '));
                let cosite = 0;

                const total = attached.length;
                attached = attached.filter(dom => {
                    let i = dom.lastIndexOf('.');
                    i = dom.lastIndexOf('.', i - 1);
                    if (i >= 0)
                        dom = dom.substring(i + 1)
                    if (dom === 'ovh.net')
                        return false;
                    if (dom == serviceName)
                        return false;
                    if (domSet.has(dom)) {
                        cosite++;
                        return false;
                    }
                    return true;
                });

                if (!attached.length) {
                    console.log(`${serviceName}\t(${hostingInfo.offer})\tcontains ${cosite} attached hosting.`);
                    return;
                }
                let atts = await Bluebird.map(attached, async (domain) => {
                    let resolved = ['0.0.0.0'] as any;
                    try {
                        resolved = await resolve4(domain);
                        //if (!resolved.length)
                        //    resolved = ['0.0.0.0'] 
                    } catch (e) {
                    }
                    return {
                        domain, ips: resolved
                    }
                }, { concurrency: 5 })
                //console.log(atts.map(({ domain, ip }) => `http://${domain}/ ${ip}`).join('\n'));
                atts = atts.filter(({ ips }) => !validIPs.has(ips[0]));

                const toDelete = atts.filter(({ ips }) => ips[0] === '0.0.0.0');
                const canDelete = atts.filter(({ ips }) => ips[0] !== '0.0.0.0');
                if (toDelete.length === 0 && canDelete.length === 0) {
                    console.log(`${serviceName}\t(${hostingInfo.offer})\tcontains ${cosite + attached.length} attached hosting.`);
                   return;
                }
                console.log(`${serviceName}\t(${hostingInfo.offer})\thas ${total} attached domain, ${toDelete.length} are pointing to 0.0.0.0 will be removed, and ${canDelete.length} hosting looks not to be used by checking they current dns value.`); // : ${attached.join(",")}
                if (canDelete.length) {
                    console.log(`${serviceName}(${hostingInfo.clusterIp}) ${canDelete.length} not used: ${canDelete.map(({domain, ips}) => `${domain}(${ips.join(',')})`).join(', ')}`)
                    canDelete.forEach(d => toDelete.push(d));
                }
                //if (toDelete.length == 0)
                //    return;
                if (toDelete.length > 0) {
                    console.log(`${serviceName} ${toDelete.length} toDelete: ${toDelete.map(({domain}) => domain).join(', ')}`)
                    //, toDelete.map(({ domain, ip }) => `http://${domain}/ ${ip}`).join('\n'))
                    await Bluebird.map(toDelete, async ({ domain }) => {
                        let time = 0;
                        let dt = new Date().getTime();
                        try {
                            // console.log(`start removeing ${serviceName} attachedDomain ${domain}`);
                            let task = await api.web.web.$(serviceName).attachedDomain.$(domain).$delete();
                            const { id } = task;
                            while (task.status != "done") {
                                await Bluebird.delay(1000);
                                time++;
                                task = await api.web.web.$(serviceName).tasks.$(id).$get();;
                            }
                        } catch (e3) {
                            if (time > 0) {
                                dt = (new Date().getTime() - dt) / 1000;
                                console.log(`${++cnt}\t${serviceName}/${domain} removed after ${dt.toFixed(1)} Sec`);
                            } else
                                console.log(e3);
                        }
                    }, { concurrency: 8 });
                }
            } catch (e) {
                // console.log(serviceName, e)
            }
        }, { concurrency: 10 })
    } catch (ERROR) {
        console.log(ERROR)
    }
}

program.version('1.0.0');

program.command('cleanMultiSite [webHosting]')
    .description('delete unused multiSite from webHosting, if non defile, process all web hosting')
    .action(async (webHosting?: string) => {
        await cleanMultiSite(webHosting);
    });

program.parse(process.argv);
// cleanApiCert().then(() => console.log('fini'));
// cleanDomain().then(() => console.log('fini'));

