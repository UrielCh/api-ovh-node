import Ovh from '@ovh-api/api';
import ApiWeb, { HostingWebService } from '@ovh-api/hosting-web'
import ApiDom from '@ovh-api/domain'
import ApiMe, { ApiApplication, ApiCredential } from '@ovh-api/me'
import Promise from 'bluebird'
import dns from 'dns';

const ovh = new Ovh({ accessRules: 'GET /hosting/web, GET /hosting/web/*, GET /domain, POST /hosting/web/*/terminate, GET /me/api*, DELETE /me/api*' });
const apiWeb = new ApiWeb(ovh);
const apiDom = new ApiDom(ovh);
const apiMe = new ApiMe(ovh);

let resolve4 = Promise.promisify(dns.resolve4);

async function cleanApiCert() {
    let credencials: ApiCredential[] = [];
    let applicationMap = new Map<Number, ApiApplication>();
    try {
        let cnt = 0;
        let certIds = await apiMe.get('/me/api/credential') // , {status: 'validated'}
        let total = certIds.length;
        let now = new Date().getTime();
        console.log(`Found ${total} credentials\n`)
        await Promise.map(certIds, async (credentialId) => {
            let credencial = await apiMe.get('/me/api/credential/{credentialId}', { credentialId });
            let {expiration} = credencial;

            if (expiration && new Date(expiration).getTime() < now) {
                console.log(new Date(expiration).getTime() < now);
                console.log(`${++cnt}/${total} delete Old Cert ${credentialId} expired since ${credencial.expiration}`);
                await apiMe.delete('/me/api/credential/{credentialId}', { credentialId });
            }

            total--
            let { applicationId } = credencial;
            if (!applicationMap.has(applicationId)) {
                try {
                    const app = await apiMe.get('/me/api/application/{applicationId}', { applicationId })
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
        let doms = await apiDom.get('/domain')
        console.log(`${doms.length} Domaines`)
        let hostings = await apiWeb.get('/hosting/web')
        console.log(`${hostings.length} hostings`)
        let hdoms = new Set(doms);
        let total = hostings.length;
        hostings = hostings.filter(h => !hdoms.has(h));
        console.log(`${hostings.length}/${total} dosting have no matching domaines`);
        await Promise.map(hostings, async serviceName => {
            let hosting: HostingWebService = await apiWeb.get("/hosting/web/{serviceName}", { serviceName })
            let resolved;
            if (hosting.offer != 'start10m')
                return;
            try {
                resolved = await resolve4(serviceName);
                console.log(++cnt + ') KEEP ' + serviceName + ' resolved:' + resolved);
            } catch (e) {
                try {
                    await apiWeb.post("/hosting/web/{serviceName}/terminate", { serviceName })
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

// cleanApiCert().then(() => console.log('fini'));
cleanDomain().then(() => console.log('fini'));