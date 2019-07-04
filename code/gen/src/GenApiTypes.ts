import * as https from 'https';
import { Schema, OvhIndex, API, ModelsProp } from './schema';
import { endpoints } from './endpoints';

export interface OvhParams {
    endpoint?: string;
    host?: string;
    port?: string;
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
                            Error(`[OVH] Unable to load schema ${options.path}, HTTP response code: ${res.statusCode}`));
                    }
                    try {
                        return resolve(JSON.parse(body));
                    } catch (e) {
                        return reject(
                            Error(`[OVH] Unable to parse the schema: ${options.path}`));
                    }
                });
        })
            .on('error', (err) => reject(`[OVH] Unable to fetch the schemas: ${err}`));
    })
}

export default class GenApiTypes {
    basePath: string; // '/1.0'
    apis: CacheApi;
    models: CacheModel;
    alias: { [key: string]: string } = {};
    host: string;
    port: number;

    constructor(params?: OvhParams) {
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

    async listSchemas(): Promise<String[]> {
        let data: OvhIndex = await loadJson({ // https://eu.api.ovh.com/1.0/
            host: this.host, // eu.api.ovh.com
            port: this.port, // 443
            path: this.basePath// /1.0/
        })
        return data.apis.map(api => api.path)
    }
    /**
     * Recursively loads the schemas of the specified used APIs.
     *
     * @param {String} path
     */
    async loadSchema(path: string): Promise<any> {
        // Fetch all APIs
        let schema: Schema = await loadJson({ // https://eu.api.ovh.com/1.0/
            host: this.host, // eu.api.ovh.com
            port: this.port, // 443
            path: this.basePath + path // /1.0/
        });
        // Entry Points
        schema.apis.map((api: API) => {
            let apiPath = api.path.split('/');
            this.addApi(apiPath, api, this.apis);
        });
        // Model
        for (const name of Object.keys(schema.models)) {
            const model = schema.models[name];
            if (~model.id.indexOf('.')) {
                console.log('hardFixing typeId: ' + model.id)
                model.id = model.id.replace(/\./g, '_');
            }
            this.alias[name] = model.namespace + '.' + model.id;
            //if (~name.indexOf('port'))
            //    console.log(name + " " + model.namespace + '.' + model.id);
            this.addModel(model, name, this.models);
        }
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
    addModel(model: ModelsProp, alias: string, root: CacheModel): void {
        // name: string, 
        let { namespace, id } = model;
        let path = namespace.split('.');
        let current: CacheModel = root;
        for (const ns of path) {
            if (!current[ns]) {
                current[ns] = <CacheModel>{ _namespace: ns };
            }
            current = <CacheModel>current[ns];
        }

        if (~alias.indexOf('<')) {
            if (model.generics) {
                console.log('GENERIC ' + model.generics.join(',') + ' present for ' + alias );
            } else {
                let m = alias.match(/<([A-Z,]+)>/);
                if (m) {
                    model.generics = m[1].split(/,/);
                    console.log('FIXING GENERIC ' + model.generics.join(',') + ' present for ' + alias );
                } else {
                    console.log('FAIL to fix GENERIC in ' + alias );
                }
            }
        }
        model.generics
        let old = <CacheModel>current[id];
        if (old) {
            // console.log('colision', current[id]);
            old._name = id;
            old._alias = alias;
            old._model = model;
        } else {
            current[id] = <CacheModel>{ _name: id, _alias: alias, _model: model };
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
