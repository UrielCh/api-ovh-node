import * as https from 'https';
import { Schema, OvhIndex, API, ModelsProp } from './schema';
import { endpoints } from './endpoints';
import path from 'path';
import fse from 'fs-extra';
import { EOL } from 'os';

export const INDEX_BY_NAME = false;

export interface OvhParams {
    endpoint?: string;
    host?: string;
    port?: number;
    apis?: string[];
}

export interface CacheApi {
    _path: string;
    _api: API | undefined;
    [key: string]: API | string | CacheApi | undefined;
}

export interface CacheModel {
    _name?: string;
    _alias?: string;
    _namespace?: string;
    _model?: ModelsProp;
    _parent?: CacheModel;
    [key: string]: ModelsProp | string | CacheModel | undefined;
}

/**
 * Fetch an API schema
 *
 * @param {Object} options: HTTP request options
 * @param {Function} callback
 */
let loadJson = (options: https.RequestOptions): Promise<any> => {
    return new Promise((resolve, reject) => {
        https.get(options, (res) => {
            let body: string = '';
            res.on('data', (chunk: string) => body += chunk)
                .on('end', () => {
                    if (res.statusCode !== 200) {
                        return reject(
                            Error(`[OVH] Unable to load schema "https://${options.host}:${options.port}${options.path}", HTTP response code: ${res.statusCode}`));
                    }
                    try {
                        return resolve(JSON.parse(body));
                    } catch (e) {
                        return reject(
                            Error(`[OVH] Unable to parse the schema: ${options.path}`));
                    }
                });
        })
            .on('error', (err) => reject(`[OVH] Unable to fetch the schemas: "https://${options.host}:${options.port}${options.path}" Err:${err}`));
    })
}

export let filterReservedKw = (name: string) => {
    if (!name)
        return name;
    if (~name.indexOf('public')) {
        if (name === 'public')
            return 'publik';
        name = name.replace(/.public([.\[])/, '.publik$1')
        name = name.replace(/\.public$/, '.publik')
    }

    if (~name.indexOf('package')) {
        if (name === 'package')
            return 'pakage';
        name = name.replace(/\.package([.\[])/, '.pakage$1')
        name = name.replace(/\.package$/, '.pakage')
    }

    if (~name.indexOf('interface')) {
        if (name === 'interface')
            return 'interf';
        name = name.replace(/\.interface([.\[])/, '.interf$1')
        name = name.replace(/\.interface$/, '.interf')
    }

    name = name.replace(/\.([0-9])/g, '._$1')
    name = name.replace(/^([0-9])/g, '_$1')
    return name;
}

export default class GenApiTypes {
    basePath: string; // '/1.0'
    apis: CacheApi;
    models: CacheModel;
    alias: { [key: string]: string } = {};
    host: string;
    port: number;
    schemaFile?: string;
    constructor(private namespace: string, params?: OvhParams) {
        params = params || {};
        // Custom configuration of the API endpoint
        let { host, port, endpoint } = params;
        if (host) {
            this.host = host;
            this.port = Number(port) || 443;
        } else {
            endpoint = endpoint || 'ovh-eu';
            let selected = endpoints[endpoint]
            if (!selected)
                throw new Error('[OVH] Unknown API ' + endpoint);
            this.host = selected.host;
            this.port = Number(selected.port) || 443;
        }
        this.basePath = '/1.0';

        // Declared used API, will be used to check the associated schema
        this.apis = <CacheApi>{ _path: '' }
        this.models = <CacheModel>{ _name: '' }
    }

    async listSchemas(): Promise<string[]> {
        let data: OvhIndex = await loadJson({ // https://eu.api.ovh.com/1.0/
            host: this.host, // eu.api.ovh.com
            port: this.port, // 443
            path: this.basePath// /1.0/
        })
        return data.apis.map(api => api.path)
    }
    getFullPath(path: string): string {
        return 'https://' + `${this.host}/${this.basePath}${path}.json`.replace('//', '/');
    }
    /**
     * Recursively loads the schemas of the specified used APIs.
     *
     * @param {String} apiPath Api Path strting with / like /license/cloudLinux; or /me
     */
    async loadSchema(apiPath: string): Promise<Schema> {
        // Fetch all APIs
        let destination = '';
        if (apiPath) {
            destination = path.join(__dirname, '..', 'models', this.namespace);
            await fse.ensureDir(destination);
            const filename = apiPath.substr(1).replace(/\//g, '-').replace('.json', '.ts');
            destination = path.join(destination, filename);
            this.schemaFile = destination;
        }

        let schema: Schema = await loadJson({ // https://eu.api.ovh.com/1.0/
            host: this.host, // eu.api.ovh.com
            port: this.port, // 443
            path: this.basePath + apiPath // /1.0/
        });
        // archive the current API model file for future checks.
        if (destination) {
            const replacer = (key: string, value: any) =>
                value instanceof Object && !(value instanceof Array) ?
                    Object.keys(value).sort().reduce((sorted: any, key: string) => {
                        sorted[key] = value[key];
                        return sorted
                    }, {}) :
                    value;
            const srcUrl = `https://${this.host}:${this.port}${this.basePath}${apiPath}`;
            // 
            // sort parameters: body, then path, then query
            // then sort by name
            if (!schema.apis) {
                console.error(`missing APIS in ${srcUrl}`)
            } else {
                schema.apis.sort((a,b) => a.path.localeCompare(b.path));
                schema.apis.forEach(api => {
                    if (!api.operations) {
                        console.error(`missing APIS in Operartions in ${api.path} in ${srcUrl}`)
                        return;
                    }
                    api.operations.forEach(operation => {
                        if (!operation.parameters) {
                            console.error(`missing APIS in Operartions parameters in ${api.path} / ${operation.httpMethod} in ${srcUrl}`)
                            return;
                        }
                        operation.parameters.sort((a, b) => {
                            const t1 = a.paramType.localeCompare(b.paramType);
                            if (t1 != 0)
                                return t1;
                            const an = a.name || '';
                            const bn = b.name || '';
                            return an.localeCompare(bn);
                        });
                    })
                })
            }
            const json = JSON.stringify(schema, replacer, 2);

            const importHeader = `import {Schema} from '../../src/schema';${EOL}${EOL}`;
            const commentHeader = `// imported from ${srcUrl}${EOL}${EOL}`;
            const exportHeader = `export const schema: Schema = `;
            await fse.writeFile(destination, `${importHeader}${commentHeader}${exportHeader}${json}`, { encoding: 'UTF8' });
            
            // Entry Points
            if (schema.apis)
                schema.apis.map((api: API) => {
                    api.operations.forEach(op => {
                        op.responseType = filterReservedKw(op.responseType);
                        op.responseFullType = filterReservedKw(op.responseFullType || '');
                        op.parameters.forEach(p => {
                            p.dataType = filterReservedKw(p.dataType);
                            p.fullType = filterReservedKw(p.fullType);
                        })
                    })
                    let apiPath = api.path.split('/');
                    this.addApi(apiPath, api, this.apis);
                });
        }
        // Model
        if (schema.models)
            for (const aliasName of Object.keys(schema.models)) {
                const model = schema.models[aliasName];
                // remove . from modelId
                //if (aliasName.startsWith('price.DedicatedCloud.2016v4'))
                //    console.log('in price.DedicatedCloud.2016v4');
                if (~model.id.indexOf('.')) {
                    // console.log('hardFixing typeId: ' + model.id)
                    model.id = model.id.replace(/\./g, '_');
                }
                if (INDEX_BY_NAME) {
                    this.alias[aliasName] = aliasName;// model.namespace + '.' + model.id;
                } else {
                    if (this.alias[aliasName]) {
                        console.log('COLISION aliasName:' + aliasName)
                    }
                    this.alias[aliasName] = model.namespace + '.' + model.id;
                }
                this.addModel(model, aliasName, this.models);
            }
        return schema;
    }

    /**
     * Add a fetched schema to the loaded API list
     *
     * @param {Array} apiPath: Splited API path using '/'
     * @param {String} api: API Name
     */
    addApi(apiPath: string[], api: API, apis: CacheApi): void {
        let path = apiPath.shift();
        if (path === '') {
            return this.addApi(apiPath, api, apis);
        }
        if (!path)
            return;
        let selected: CacheApi;
        if (apis[path] == null) {
            selected = <CacheApi>{ _path: `${apis._path}/${path}` };
            apis[path] = selected;
        } else {
            selected = <CacheApi>apis[path];
        }
        if (apiPath.length > 0) {
            return this.addApi(apiPath, api, selected);
        }
        selected._api = <API>api;
    }

    /**
     * Add a fetched models to the loaded Model list
     *
     * @param {Array} apiPath: Splited API path using '.'
     * @param {String} model: model data
     */
    addModel(model: ModelsProp, aliasName: string, root: CacheModel): void {
        // name: string, 
        let { namespace, id } = model;

        let path = namespace.split('.');
        // TMP
        if (INDEX_BY_NAME) {
            path = aliasName.split('.');
            id = path.pop() as string;
        }
        path = path.map(filterReservedKw)

        let current: CacheModel = root;
        for (const ns of path) {
            if (!current[ns]) {
                current[ns] = <CacheModel>{ _namespace: ns, _parent: current };
            }
            current = <CacheModel>current[ns];
        }

        // inject missing generics
        if (~aliasName.indexOf('<')) {
            if (model.generics) {
                // console.log('GENERIC ' + model.generics.join(',') + ' present for ' + aliasName);
            } else {
                let m = aliasName.match(/<([A-Z,]+)>/);
                if (m) {
                    model.generics = m[1].split(/,/);
                    console.log('FIXING GENERIC ' + model.generics.join(',') + ' present for ' + aliasName);
                } else {
                    console.log('FAIL to fix GENERIC in ' + aliasName);
                }
            }
        }
        if (model.properties)
            for (let k of Object.keys(model.properties)) {
                let field = model.properties[k];
                field.type = filterReservedKw(field.type);
                if (field.fullType)
                    field.fullType = filterReservedKw(field.fullType);
            }
        // model.id = filterReservedKw(model.id);
        let old = <CacheModel>current[id];
        if (old) {
            if (old._model) {
                // Fix bug in /order
                // order.catalog.publik.DedicatedServerCatalog
                // vs
                // order.catalog.publik.Catalog2
                //console.log('colision', current[id]);
                id = <string>aliasName.split('.').pop();
                model.id = id;
                current[id] = <CacheModel>{ _name: id, _alias: aliasName, _model: model, _parent: current };
                // console.log('colition To', current[id]);
            } else {
                old._name = id;
                old._alias = aliasName;
                old._model = model;
            }
        } else {
            current[id] = <CacheModel>{ _name: id, _alias: aliasName, _model: model, _parent: current };
        }
    }

    warnsRequest(httpMethod: string, pathStr: string) {
        let path: string[] = pathStr.split('/'),
            api = this.apis;

        while (path.length > 0) {
            let pElem: string = <string>path.shift();
            if (pElem === '') {
                continue;
            }
            if (api[pElem] != null) {
                api = <CacheApi>api[pElem];
                continue;
            }
        }
    }
}
