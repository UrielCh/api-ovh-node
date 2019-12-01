import ApiWeb, { hosting } from '@ovh-api/hosting-web'
import ApiDom from '@ovh-api/domain'
import ApiMe, { api } from '@ovh-api/me'
import Promise from 'bluebird'
import dns from 'dns';
import Ovh from '@ovh-api/api';


''

const ovh = new Ovh({ accessRules: 'GET /hosting/web, GET /hosting/web/*, GET /domain, POST /hosting/web/*/terminate, GET /me/api*, DELETE /me/api*, DELETE /hosting/web/*', certCache: '../../cleanToken2.json' });
const apiWeb = ApiWeb(ovh);
const apiDom = ApiDom(ovh);
const apiMe = ApiMe(ovh);

let resolve4 = Promise.promisify(dns.resolve4);

async function cleanApiCert() {
    let credencials: api.Credential[] = [];
    let applicationMap = new Map<Number, api.Application>();
    try {
        let cnt = 0;
        let certIds = await apiMe.api.credential.$get() // , {status: 'validated'}
        let total = certIds.length;
        let now = new Date().getTime();
        console.log(`Found ${total} credentials\n`)
        await Promise.map(certIds, async (credentialId) => {
            let credencial = await apiMe.api.credential.$(credentialId).$get();
            let { expiration } = credencial;

            if (expiration && new Date(expiration).getTime() < now) {
                console.log(new Date(expiration).getTime() < now);
                console.log(`${++cnt}/${total} delete Old Cert ${credentialId} expired since ${credencial.expiration}`);
                await apiMe.api.credential.$(credentialId).$delete();// ('/me/api/credential/{credentialId}', { credentialId });
            }

            total--
            let { applicationId } = credencial;
            if (!applicationMap.has(applicationId)) {
                try {
                    const app = await apiMe.api.application.$(applicationId).$get();
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
        let doms = await apiDom.$get()
        console.log(`${doms.length} Domaines`)
        let hostings = await apiWeb.web.$get()
        console.log(`${hostings.length} hostings`)
        let hdoms = new Set(doms);
        let total = hostings.length;
        hostings = hostings.filter(h => !hdoms.has(h));
        console.log(`${hostings.length}/${total} dosting have no matching domaines`);
        await Promise.map(hostings, async (serviceName: string) => {
            let hosting: hosting.web.Service = await apiWeb.web.$(serviceName).$get();
            let resolved;
            if (hosting.offer != 'start10m')
                return;
            try {
                resolved = await resolve4(serviceName);
                console.log(++cnt + ') KEEP ' + serviceName + ' resolved:' + resolved);
            } catch (e) {
                try {
                    await apiWeb.web.$(serviceName).terminate.$post();
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


async function cleanMultiSite() {
    try {
        let cnt = 0;
        let doms = await apiDom.$get()
        let domSet = new Set(doms);
        console.log(`${doms.length} Domaines`)
        let hostings = await apiWeb.web.$get()
        console.log(`${hostings.length} hostings`)
        await Promise.map(hostings, async (serviceName: string) => {
            try {
                let attached = await apiWeb.web.$(serviceName).attachedDomain.$get();
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
                    if (domSet.has(dom))
                        return false;
                    return true;
                });

                if (!attached.length)
                    return;
                const atts = await Promise.map(attached, async (domain) => {
                    let resolved = ['0.0.0.0'] as any;
                    try {
                        resolved = await resolve4(domain);
                        //if (!resolved.length)
                        //    resolved = ['0.0.0.0'] 
                    } catch (e) {
                    }
                    return {
                        domain, ip: resolved.join(', ')
                    }
                }, { concurrency: 5 })
                //console.log(atts.map(({ domain, ip }) => `http://${domain}/ ${ip}`).join('\n'));
                const toDelete = atts.filter(({ ip }) => ip === '0.0.0.0');
                console.log(`${serviceName} has ${total} attached domain, ${attached.length} may be removed ${toDelete.length} to remove`); // : ${attached.join(",")}
                if (toDelete.length == 0)
                    return;
                console.log(`${serviceName} ${toDelete.length} toDelete:`)//, toDelete.map(({ domain, ip }) => `http://${domain}/ ${ip}`).join('\n'))
                await Promise.map(toDelete, async ({ domain }) => {
                    let time = 0;
                    try {
                        // console.log(`start removeing ${serviceName} attachedDomain ${domain}`);
                        let task = await apiWeb.web.$(serviceName).attachedDomain.$(domain).$delete();
                        const { id } = task;
                        while (task.status != "done") {
                            await Promise.delay(1000);
                            time++;
                            task = await apiWeb.web.$(serviceName).tasks.$(id).$get();;
                        }
                    } catch (e3) {
                        if (time > 0)
                            console.log(`${++cnt} ${serviceName}/${domain} removed after ${time} loop`);
                        else
                            console.log(e3);
                    }
                }, { concurrency: 8 });
            } catch (e) {
                // console.log(serviceName, e)
            }
        }, { concurrency: 10 })
    } catch (ERROR) {
        console.log(ERROR)
    }
}


// cleanApiCert().then(() => console.log('fini'));
// cleanDomain().then(() => console.log('fini'));
cleanMultiSite().then(() => console.log('fini'));
