import { Parameter } from './schema';
import fse from 'fs-extra'
import Path from 'path'
import GenApiTypes, { CacheApi, CacheModel, filterReservedKw } from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';

async function main() {
    let gen = new GenApiTypes();
    let apis = await gen.listSchemas()
    // ['/me', '/domain']
    // await fse.mkdir('dist');

    // debug gen a single API
    if (true)
        apis = apis.filter((api) => {
            //if ('/price' == api)
            //    return true;
            if ('/order' == api)
                return true;
            //if ('/distribution/image' == api)
            //    return true;
            return false;
        })
    fse.ensureDirSync('dist');
    for (const api of apis) {
        let flat = api.replace(/\//g, '');
        let fn = `dist${Path.sep}${flat}.ts`;
        let cg = new CodeGenerator(api);
        //extraNS = `OVH${flat}.`;
        // extraNS = `OVH.`;
        let code = await cg.generate()
        console.log(`saving ${fn}`);
        await fse.writeFile(fn, code);
    }
}

main().then(() => console.log);