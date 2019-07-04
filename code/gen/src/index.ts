import fse from 'fs-extra'
import Path from 'path'
import GenApiTypes from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';
import Promise from 'bluebird';

async function main() {
    let gen = new GenApiTypes();
    let apis = await gen.listSchemas()
    // ['/me', '/domain']
    // await fse.mkdir('dist');

    // debug gen a single API
    if (false)
        apis = apis.filter((api) => {
            //if ('/price' == api)
            //    return true;
            //if ('/order' == api)
            //    return true;
            if ('/cdn/webstorage' == api)
                return true;
            //if ('/distribution/image' == api)
            //    return true;
            return false;
        })
    fse.ensureDirSync('dist');

    await Promise.map(apis, async api => {
        let flat = api.replace(/\//g, '');
        let fn = `dist${Path.sep}${flat}.ts`;
        let cg = new CodeGenerator(api);
        let code = await cg.generate()
        console.log(`saving ${fn}`);
        await fse.writeFile(fn, code);
    }, { concurrency: 4 });
}

main().then(() => console.log);