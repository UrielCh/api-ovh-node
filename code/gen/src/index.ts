import fse from 'fs-extra'
import path from 'path'
import GenApiTypes from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';
import Promise from 'bluebird';
import rimraf from 'rimraf'
import { IEndpoint, endpoints } from './endpoints';
import { formatUpperCamlCase, formatLowerCamlCase } from './utils';

const PathToApiName = (api: string) => api.substring(1).replace(/\//g, '-').replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '');

async function main() {
    for (const endpoint of Object.values(endpoints)) {
        //if (endpoint.directory != 'kimsufi-ca')
        //    continue;
        try {
            await genRegion(endpoint)
        } catch (e) {
            console.error(`Fail to gen ${endpoint.host} API`, e)
        }
    }
}
// conf: {namespace: string}
async function genRegion(endpoint: IEndpoint) {
    let gen = new GenApiTypes({ host: endpoint.host, port: endpoint.port.toString()});
    let apis = await gen.listSchemas()
    let allApi = apis.map(PathToApiName);
    // All existing API
    let apiSet = new Set(allApi);

    // debug gen a subset of API
    if (false)
        apis = apis.filter((api) => {
            //return ~api.indexOf('veeam')
            //if (api.endsWith('ceph')) return true;
            //if ('/cloud' == api) return true;
            if ('/domain' == api) return true;
            //if ('/email/domain' == api) return true;
            //if ('/me' == api) return true;
            // if (this.api == '/cloud' || this.api == '/domain' || this.api == '/email/domain' || this.api == '/me'
            // || this.api == '/pack/xdsl' || this.api == '/veeam/veeamEnterprise' || this.api == '/telephony' || this.api == '/xdsl')
            //if ('/price' == api) return true;
            //if ('/order' == api) return true;
            //if ('/cdn/webstorage' == api) return true;
            //if ('/distribution/image' == api) return true;
            return false;
        })
    // DEBUG gen a single API
    // apis = apis.filter((api) => '/me' == api)
    /**
     * Delete API removed API
     */
    const packagesDir = path.join('..', '..', endpoint.directory);
    await fse.mkdirp(packagesDir);
    let oldApis = await fse.readdir(packagesDir)
    oldApis = oldApis.filter(name => !apiSet.has(name))
    oldApis.forEach(name => {
        console.log(`${name} can be remove`);
        rimraf.sync(path.join(packagesDir, name));
    })
    /**
     * : ${allApi.join(',')}
     */
    const concurrency = 4;
    console.log(`Found ${allApi.length} Api available on ${endpoint.host}`);
    await Promise.map(apis, async api => {
        let cg = new CodeGenerator({ host: endpoint.host, port: endpoint.port.toString()}, api);
        try {
            await cg.loadSchema();
        } catch (e) {
            console.log(`${endpoint.host} / ${api} faild`, e);
            return;
        }
        // ignore empry API
        if (cg.schema?.apis.length == 0)
            return;
        let flat = PathToApiName(api);
        let dir = path.join(packagesDir, flat);
        await fse.ensureDir(dir);

        ////////////
        // index.ts
        //

        let fn = path.join(dir, 'index.ts');
        let code = await cg.generate();
        await fse.writeFile(fn, code);
        let rwfile = true;


        ////////////
        // readme.md
        //

        fn = path.join(dir, 'README.md');
        const content: string[] = [];
        content.push(`# Connector for OVHCloud service ${flat}`);
        content.push(``);
        content.push(`This module contains all typing needed to use OvhCloud ${flat} service, with hi-level IntelliSense / Code Completion`);
        content.push(``);
        content.push(`[![NPM Version](https://img.shields.io/npm/v/@${endpoint.namespace}/${flat}.svg?style=flat)](https://www.npmjs.org/package/@${endpoint.namespace}/${flat})`);
        content.push(``);
        content.push(`## setup`);
        content.push(``);
        content.push(`With npm:`);
        content.push('````bash');
        content.push('npm install --save @ovh-api/api');
        if (flat != 'me') {
            content.push(`npm install --save @${endpoint.namespace}/me`);
        }
        content.push(`npm install --save @${endpoint.namespace}/${flat}`);
        content.push(`... Add all APIs you needs`);
        content.push('````');
        content.push(``);
        content.push(`## usage`);
        content.push(``);
        content.push('````typescript');
        content.push(`import OvhEngine from '@ovh-api/api';`);
        if (flat != 'me') {
            content.push(`import apiMe from '@${endpoint.namespace}/me';`);
        }
        
        content.push(`import api${formatUpperCamlCase(flat)} from '@${endpoint.namespace}/${flat}';`);
        content.push('');
        content.push(`const ovhEngine = new OvhEngine({ `);
        content.push(`    certCache: './cert-cache.json', // optionnal cache certificat to disk`);

        let privileges = `GET ${cg.api}, GET ${cg.api}/*`
        if (flat != 'me') {
            privileges += ', GET /me';
        }
        content.push(`    accessRules: '${privileges}', // optionnal limit the requested privileges.`);
        content.push(`});`);
        content.push('');
        content.push('const api = {');
        if (flat != 'me') {
            content.push(`    me: apiMe(ovhEngine),`);
        }
        content.push(`    ${formatLowerCamlCase(flat)}: api${formatUpperCamlCase(flat)}(ovhEngine),`);
        content.push('}');
        content.push('');
        content.push('const test = async () => {');
        if (flat != 'me') {
            content.push(`    const { nichandle } = await api.me.$get();`);
        }
        content.push(`    const data = await api.${formatLowerCamlCase(flat)}.$get();`);
        content.push('    console.log(`${nichandle} have the following services:`);');
        content.push('    console.log(data);');
        content.push('}');
        content.push('');
        content.push('````');
        // import { EOL } from 'os';
        await fse.writeFile(fn, content.join('\n'));

        ////////////
        // package.json
        //

        fn = path.join(dir, 'package.json');
        try {
            await fse.stat(fn);
            rwfile = false;
        } catch { }
        //rwfile = true;
        if (rwfile)
            await fse.writeJSON(fn, {
                name: `@${endpoint.namespace}/${flat}`,
                description: `Add typing to to ovh api ${flat}`,
                version: "3.0.0",
                typings: "index.d.ts",
                license: "MIT",
                author: "Uriel Chemouni <uchemouni@gmail.com>",
                dependencies: {
                    "@ovh-api/common": "^3.1.2",
                },
                publishConfig: {
                    access: "public"
                },
                bugs: "https://github.com/UrielCh/api-ovh-node/issues",
                repository: {
                    type: "git",
                    url: "git+https://github.com/UrielCh/api-ovh-node.git"
                },
                scripts: {
                    build: "tsc",
                    "build:watch": "tsc --watch",
                    prepare: "npm run build"
                },
                files: [
                    "index.js",
                    "index.d.ts"
                ]            
            }, { spaces: 4 })

        ////////////
        // tsconfig.json
        //

        fn = path.join(dir, 'tsconfig.json');
        rwfile = true;
        try {
            await fse.stat(fn);
            rwfile = false;
        } catch (e) {
        }
        if (rwfile)
            await fse.writeJSON(fn, {
                "compilerOptions": {
                    "target": "es2017",
                    "module": "commonjs",
                    "declaration": true,
                    "strict": true,
                    "moduleResolution": "node",
                    "esModuleInterop": true,
                }
            }, { spaces: 4 });
        // DONE
    }, { concurrency });
}

main().then(() => console.log);