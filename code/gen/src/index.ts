import fse from 'fs-extra'
import path from 'path'
import GenApiTypes from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';
import Promise from 'bluebird';
import rimraf from 'rimraf'

async function main() {
    let gen = new GenApiTypes();
    let apis = await gen.listSchemas()
    // ['/me', '/domain']
    // await fse.mkdir('dist');
    let allApi = apis.map(api => api.substring(1).replace(/\//g, '-'));
    let apiSet = new Set(allApi);

    // debug gen a single API
    if (false)
        apis = apis.filter((api) => {
            // return ~api.indexOf('veeam')
            //if ('/price' == api)
            //    return true;
            //if ('/order' == api)
            //    return true;
            //if ('/cdn/webstorage' == api)
            //    return true;
            //if ('/distribution/image' == api)
            //    return true;
            return false;
        })


    const packagesDir = path.join('..', '..', 'packages');
    //let dir = path.join('..', '..', 'packages', flat);
    let oldApis = await fse.readdir(packagesDir)

    oldApis = oldApis.filter(name => !apiSet.has(name))
    oldApis.forEach(name => {
        console.log(`${name} can be remove`);
        rimraf.sync(path.join(packagesDir, name));
    })
    console.log(`new APis:` + allApi.join(','));
    await Promise.map(apis, async api => {
        let flat = api.substring(1).replace(/\//g, '-');
        let dir = path.join('..', '..', 'packages', flat);
        await fse.ensureDir(dir);
        let fn = path.join(dir, 'index.ts');
        let cg = new CodeGenerator(api);
        let code = await cg.generate()
        console.log(`${api} saving ${fn}`);
        await fse.writeFile(fn, code);

        fn = path.join(dir, 'package.json');
        try {
            await fse.stat(fn);
        } catch (e) {
            await fse.writeJSON(fn, {
                "name": `@ovh-api/${flat}`,
                "description": `Add typing to to ovh api ${flat}`,
                "version": "1.2.4",
                "typings": "index.d.ts",
                "license": "MIT",
                "author": "Uriel Chemouni <uchemouni@gmail.com>",
                "dependencies": {
                    "@ovh-api/common": "^1.2.2"
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
                    "run": "ts-node src/index.ts",
                    "build": "tsc",
                    "build:watch": "tsc --watch"
                },
            }, { spaces: 4 })
        }

        fn = path.join(dir, 'tsconfig.json');
        try {
            await fse.stat(fn);
        } catch (e) {
            await fse.writeJSON(fn, {
                "extends": "../../tsconfig.json",
                "compilerOptions": {
                }
            }, { spaces: 4 });
        }


    }, { concurrency: 4 });
}

main().then(() => console.log);