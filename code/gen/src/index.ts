import fse from 'fs-extra'
import path from 'path'
import GenApiTypes from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';
import Promise from 'bluebird';
import rimraf from 'rimraf'
import { IEndpoint, endpoints } from './endpoints';

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
     * 
     */
    console.log(`Available APis on ${endpoint.host}: ${allApi.join(',')}`);
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
        let fn = path.join(dir, 'index.ts');
        let code = await cg.generate();
        // console.log(`${api} saving ${fn}`);
        await fse.writeFile(fn, code);
        let rwfile = true;

        fn = path.join(dir, 'package.json');
        try {
            await fse.stat(fn);
            rwfile = false;
        } catch { }
        //rwfile = true;
        if (rwfile)
            await fse.writeJSON(fn, {
                "name": `@${endpoint.namespace}/${flat}`,
                "description": `Add typing to to ovh api ${flat}`,
                "version": "2.0.0",
                "typings": "index.d.ts",
                "license": "MIT",
                "author": "Uriel Chemouni <uchemouni@gmail.com>",
                "dependencies": {
                    "@ovh-api/common": "^2.0.0",
                },
                "publishConfig": {
                    "access": "public"
                },
                "bugs": "https://github.com/UrielCh/api-ovh-node/issues",
                "repository": {
                    "type": "git",
                    "url": "git+https://github.com/UrielCh/api-ovh-node.git"
                },
                "scripts": {
                    "build": "tsc",
                    "build:watch": "tsc --watch"
                },
                "files": [
                    "index.js",
                    "index.d.ts",
                    "index.ts"
                ]            
            }, { spaces: 4 })

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
    }, { concurrency: 4 });
}

main().then(() => console.log);