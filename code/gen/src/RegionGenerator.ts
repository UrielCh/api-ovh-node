import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'
import GenApiTypes from './GenApiTypes';
import { CodeGenerator } from './CodeGenerator';
import Nativebird from 'nativebird';
import { sync as rimraf} from 'rimraf'
import { IEndpoint } from './endpoints';
import { formatUpperCamlCase, formatLowerCamlCase, writeIfDiff } from './utils';
import { EOL } from 'os';

const pathToApiName = (api: string) => api.substring(1).replace(/\//g, '-').replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '');

export class RegionGenerator {
    constructor(private endpoint: IEndpoint) {
        this.workDir = path.join('..', '..', this.endpoint.directory);
    }

    private _apis?: string[];
    private workDir: string;
    deletedApi = 0;
    /**
     * get all available APIs for this region
     */
    async listApis(): Promise<string[]> {
        if (this._apis)
            return this._apis;
        const { host, port } = this.endpoint;
        let genApiTypes = new GenApiTypes(this.endpoint.namespace, { host, port });
        // get all available APIs for this region
        this._apis = await genApiTypes.listSchemas()
        return this._apis;
    }

    getPackageDir(pkgName: string): string {
        return path.join(this.workDir, pkgName);
    }
    /**
     * Delete deprecated API removed from the region
     */
    async deleteOldApis() {
        let apis = await this.listApis();
        let allApi = apis.map(pathToApiName);
        let apiSet = new Set(allApi);
        await fse.mkdirp(this.workDir);
        let oldApis = await fs.promises.readdir(this.workDir)
        oldApis = oldApis.filter(name => !apiSet.has(name))
        oldApis.forEach(name => this.deleteApi(name))
    }

    async deleteApi(name: string) {
        const fullDir = path.join(this.workDir, name);
        console.log(`${this.endpoint.directory}/${name} can be remove, deleting: ${fullDir}`);
        rimraf(fullDir);
        this.deletedApi++;
    }

    async genRegion() {
        const { host, port } = this.endpoint;
        let apis = await this.listApis();
        let allApi = apis.map(pathToApiName);
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
        await this.deleteOldApis()

        /**
         * : ${allApi.join(',')}
         */
        const concurrency = 1;
        console.log(`Found ${allApi.length} Api available on ${host}`);
        await Nativebird.map(apis, async apiPath => {
            let cg = new CodeGenerator(this.endpoint.namespace, { host, port }, apiPath);
            try {
                await cg.loadSchema();
            } catch (e) {
                console.error(`${host}${apiPath}.json failed check: ${cg.gen.schemaFile}`, e);
                try {
                    await cg.loadSchema();
                } catch (e) {
                }
                return;
            }


            let flat = pathToApiName(apiPath);
            let dir = this.getPackageDir(flat);

            // ignore empty API
            if (!cg.schema || !cg.schema.apis || !cg.schema.apis) {
                console.log(flat + ' is empty.');
                this.deleteApi(path.basename(dir));
                return;
            }
            await fse.ensureDir(dir);

            ////////////
            // index.ts
            //

            let fn = path.join(dir, 'index.ts');
            let code = await cg.generate({ dest: fn });
            await writeIfDiff(fn, code);
            await this.genPackageReadme(dir, cg);
            await this.genPackageJson(dir, flat);
            await this.genTsConfig(dir);
            // DONE
        }, { concurrency });
    }

    private async genPackageReadme(dir: string, cg: CodeGenerator) {
        const { host, port, directory, namespace, region } = this.endpoint;
        let flat = pathToApiName(cg.apiPath);
        const fn = path.join(dir, 'README.md');
        const content: string[] = [];
        content.push(`# OVHCloud API client for **${flat}** region ${region}`);
        content.push(``);
        content.push(`This module contains all typing needed to use OvhCloud **${flat}** APIs, with hi-level IntelliSense / Code Completion`);
        content.push(``);
        content.push(`[![NPM Version](https://img.shields.io/npm/v/@${namespace}/${flat}.svg?style=flat)](https://www.npmjs.org/package/@${namespace}/${flat})`);
        content.push(``);
        content.push(`## Setup`);
        content.push(``);
        content.push(`With npm:`);
        content.push(``);
        content.push('```bash');
        content.push('npm install --save @ovh-api/api');
        if (flat != 'me') {
            content.push(`npm install --save @${namespace}/me`);
        }
        content.push(`npm install --save @${namespace}/${flat}`);
        content.push(`... Add all APIs you needs`);
        content.push('```');
        content.push(``);
        content.push(`## Usage`);
        content.push(``);
        content.push('```typescript');
        content.push(`import OvhEngine from '@ovh-api/api';`);
        if (flat != 'me') {
            content.push(`import apiMe from '@${namespace}/me';`);
        }

        content.push(`import api${formatUpperCamlCase(flat)} from '@${namespace}/${flat}';`);
        content.push('');
        content.push(`const ovhEngine = new OvhEngine({ `);
        content.push(`    certCache: './cert-cache.json', // optional cache certificat on disk.`);
        let privileges = `GET ${cg.apiPath}, GET ${cg.apiPath}/*`
        if (flat != 'me') {
            privileges += ', GET /me';
        }
        content.push(`    accessRules: '${privileges}', // optional limit the requested privileges.`);
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
        if (flat != 'me') {
            content.push('    console.log(`${nichandle} have the following services:`);');
        }
        content.push('    console.log(data);');
        content.push('}');
        content.push('```');
        content.push('');

        await writeIfDiff(fn, content.join(EOL));
    }


    private async genPackageJson(dir: string, flat: string) {
        const { namespace } = this.endpoint;
        const fn = path.join(dir, 'package.json');
        let rwfile = true;
        try {
            await fs.promises.stat(fn);
            rwfile = false;
        } catch { }
        // rwfile = true;
        if (rwfile)
            await fse.writeJSON(fn, {
                name: `@${namespace}/${flat}`,
                description: `Add typing to to ovh api ${flat}`,
                version: "4.0.0",
                keywords: [
                    "ovh",
                    "ovhCloud",
                    "api",
                    "typing",
                    "typescript"
                ],
                exports: {
                    ".": {
                        require: "./cjs/index.js",
                        import: "./index.js",
                        types: "./index.d.ts"
                    }
                },
                typings: "index.d.ts",
                main: "./cjs/index.js",
                license: "MIT",
                funding: "https://github.com/sponsors/urielch",
                author: "Uriel Chemouni <uchemouni@gmail.com>",
                dependencies: {
                    "@ovh-api/common": "^4.0.2",
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
                    build: "tsc --pretty --project . && tsc --pretty --project tsconfig-cjs.json",
                    prepare: "npm run build"
                },
                files: [
                    "cjs",
                    "index.ts",
                    "index.js",
                    "index.d.ts"
                ]
            }, { spaces: 4 })
    }

    /**
     * gen tsconfig.json
     * @param dir generation dir
     */
    private async genTsConfig(dir: string) {
        const fnEsm = path.join(dir, 'tsconfig.json');
        const fnCjs = path.join(dir, 'tsconfig-cjs.json');

        const compilerOptions = {
            target: "es2017",
            strict: true,
            moduleResolution: "node",
            esModuleInterop: true,
        };
        const include = ["index.ts"];
        const expectedEsm = JSON.stringify({
            compilerOptions: {
                ...compilerOptions,
                module: "ES2020",
                declaration: true,
            }, include
        }, undefined, 4);
        const expectedCjs = JSON.stringify({
            compilerOptions: {
                ...compilerOptions,
                module: "commonjs",
                declaration: false,
                outDir: "cjs",
            }, include
        }, undefined, 4);

        await writeIfDiff(fnEsm, expectedEsm);
        await writeIfDiff(fnCjs, expectedCjs);
    }
}