import GenApiTypes, { CacheApi, CacheModel, filterReservedKw } from './GenApiTypes';
import { indentGen, protectFieldName, className, protectJsonKey, rawRemapNode, formatUpperCamlCase } from './utils';
import { Parameter, Schema, ModelsProp, FieldProp } from './schema';
import { brotliCompressSync } from 'zlib';

export class CodeGenerator {
    api: string;
    gen: GenApiTypes;
    extraNS: string;

    constructor(api: string) {
        this.api = api;
        this.gen = new GenApiTypes();
        this.extraNS = `OVH.`;
    }

    async generate(): Promise<string> {
        //extraNS = `OVH${fat}.`;
        let schema = await this.gen.loadSchema(`${this.api}.json`)
        // start generation
        // Add extra ROOT NameSpace
        let code = `import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';\n\n`;

        code += `export namespace ${this.extraNS.replace('.', '')} {\n`;
        code = this.dumpModel(0, this.gen.models, code, '');
        code += this.dumpApiHarmony(0, this.gen.apis, '// Apis harmony\n');
        code += this.dumpApi(0, schema, this.gen.apis, '// Api\n');

        code += '}';
        return code;
    }

    /**
     * @param depth 
     * @param api 
     * @param code 
     */
    dumpModel(depth: number, cache: CacheModel, code: string, fullNS: string): string {
        let ident0 = indentGen(depth - 1);
        //if ((<any>cache)._DEBUG) {
        //    console.log('DEBUUGG ' + (<any>cache)._DEBUG);
        //}
        if (cache._model) {
            const model = cache._model
            const name = filterReservedKw(model.id);
            let generic = ''
            if (model.generics) {
                generic = `<${model.generics.join(", ")}>`
            }
            // code += `${ident0}/**\n${ident0} * id:${model.id}\n${ident0} * ${model.description}\n${ident0} */\n`;
            code += `${ident0}//${fullNS}\n`;
            if (model.enum) {
                if (model.enumType === 'long') // enum of number
                    code += `${ident0}export type ${name} = ${model.enum.join(' | ')}\n`;
                else // enum of string
                    code += `${ident0}export type ${name} = "${model.enum.join('" | "')}"\n`;
            } else if (model.properties) {
                let props = Object.keys(model.properties).sort();
                code += `${ident0}// fullName: ${fullNS}.${name}\n`;
                code += `${ident0}export interface ${name}${generic} {\n`;
                for (const pName of props) {
                    const prop = model.properties[pName];
                    // console.log(prop);
                    code += `${ident0}    ${protectFieldName(pName)}`;
                    if (!prop.required)
                        code += '?';
                    code += ': ';
                    let type = prop.fullType || prop.type;
                    if (type.endsWith(':string'))
                        type = 'string'
                    type = this.aliasFilter(type);
                    if (~type.indexOf('.'))
                        type = this.extraNS + type;
                    type = type.replace('<long>', '<number>');
                    code += filterReservedKw(type);
                    code += ';\n';
                }
                code += `${ident0}}\n`;
            }
        }
        {
            // drop _alias _model _name __propo__
            const keys = Object.keys(cache).filter(k => !k.startsWith('_')).sort();
            if (!keys.length)
                return code;
            if (cache._namespace) {
                // code += `${ident0}// ${JSON.stringify(keys)}\n`;
                code += `${ident0}export namespace ${filterReservedKw(cache._namespace)} {\n`;
            } else if (cache._name) {
                code += `${ident0}export namespace ${cache._name} {\n`;
            }
            // drop _ prefixed fields
            // fullNS = fullNS ? fullNS + '.' + cache._name : cache._name;
            //console.log(ns['order']);
            for (const ns of keys) {
                let fns = fullNS ? `${fullNS}.${ns}` : ns;
                code = this.dumpModel(depth + 1, <CacheModel>cache[ns], code, fns);
            }
            if (cache._namespace || cache._name)
                code += `${ident0}}\n`;
        }
        return code;
    }

    aliasFilter(type: string) {
        let rawType: string = type;
        let isArray: boolean = false;
        let generic: string = '';
        if (type.endsWith("[]")) {
            rawType = type.substring(0, type.length - 2);
            isArray = true;
        }
        if (rawType.endsWith(">")) {
            let p = rawType.indexOf("<");
            generic = rawType.substring(p + 1, rawType.length - 1);
            if (rawRemapNode[generic])
                generic = rawRemapNode[generic];
            rawType = rawType.substring(0, p);
        }
        if (this.gen.alias[rawType])
            rawType = this.gen.alias[rawType];

        // OVHdomain.coreTypes.ServiceId:long
        if (~rawType.indexOf(':')) {
            rawType = rawType.substring(rawType.indexOf(':') + 1);
        }

        if (rawRemapNode[rawType])
            rawType = rawRemapNode[rawType];
        if (generic)
            rawType += '<' + generic + '>';
        if (isArray)
            rawType += "[]";
        return rawType;
    }

    fullTypeExp(param: Parameter) {
        // final String prefix = data.getNodeProject();
        let typename = param.fullType;
        if (!typename)
            typename = param.dataType;
        //let typename = 'data.toNodeType(' + full + ')';
        //if (isblackListed(typename)) {
        //    OvhApiModel model = data.models.get(full);
        //    genEnum(model, sb);
        //    return;
        //}
        typename = this.aliasFilter(typename);
        return typename;
    }

    dumpApi(depth: number, schema: Schema, api: CacheApi, code: string): string {
        let avaliablePath = formatUpperCamlCase("Paths_" + this.api.replace(/\//g, '_'))
        let indexApi = { GET: [], PUT: [], POST: [], DELETE: [] };
        schema.apis.forEach(
            api => api.operations.forEach(
                op => (<any>indexApi[op.httpMethod]).push(api.path)
            )
        );

        for (let mtd of Object.keys(indexApi)) {
            let arr = (<any>indexApi)[mtd];
            if (!arr)
                continue;
            if (!arr.length)
                continue;
            code += `type ${avaliablePath}${mtd} = ` + arr.sort().map((a: any) => `'${a}'`).join(' |\n  ')
            code += ';\n\n'
        }
        code += `export class ${formatUpperCamlCase("Api_" + this.api.replace(/\//g, '_'))} extends OvhWrapper {\n`;
        code += `  constructor(engine: OvhRequestable) {\n    super(engine);\n  }\n`;
        for (let mtd of Object.keys(indexApi)) {
            let calls = 0;
            schema.apis.sort((a, b) => a.path.localeCompare(b.path)).forEach(api => {
                api.operations.filter(op => op.httpMethod === mtd).forEach(
                    op => {
                        calls++;
                        code += '  /**\n';
                        code += `   * ${api.description}\n`;
                        code += `   * ${op.description}\n`;
                        code += '   */\n';
                        code += `  public ${mtd.toLowerCase()}(path: '${api.path}'`;

                        let done = new Set();

                        let typeFromParameter = (p: Parameter | FieldProp): string => {
                            let type = p.fullType || (<any>p).type;
                            if (type.endsWith(':string'))
                                type = 'string'
                            type = this.aliasFilter(type);
                            if (~type.indexOf('.'))
                                type = this.extraNS + type;
                            type = type.replace('<long>', '<number>');
                            return filterReservedKw(type);
                        }

                        let params = [];
                        params.push(...op.parameters.filter(p => p.paramType == 'path').map(p => { done.add(p.name); return `${p.name}: ${typeFromParameter(p)}` }).sort())
                        let paramType = (mtd == 'GET') ? 'query' : 'body';
                        let body = op.parameters.filter(p => p.paramType == paramType);
                        if (body.length == 1 && body[0].name == null) {
                            // console.log(body[0]);
                            let modelsProp = schema.models[body[0].fullType];
                            if (modelsProp && modelsProp.properties) {
                                for (let propName of Object.keys(modelsProp.properties).sort()) {
                                    let p = modelsProp.properties[propName];
                                    if (done.has(propName))
                                        continue;
                                    let param = `${protectJsonKey(propName)}`;
                                    if (!p.required)
                                        param += '?'
                                    param += ': ' + typeFromParameter(p);
                                    params.push(param)
                                }
                            } else {
                                console.log('ERORROOROR');
                                params.push('body: any')
                            }
                        } else {
                            body.sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                            params.push(...body.map(p => {
                                if (done.has(p.name))
                                    return;
                                let param = `${protectJsonKey(p.name || '')}`;
                                if (!p.required)
                                    param += '?'
                                param += ': ' + typeFromParameter(p);
                                return param;
                            }))
                        }
                        if (params.length)
                            code += `, params: {${params.join(', ')}}`;
                        // typename = this.aliasFilter(typename);
                        code += `): Promise<${this.aliasFilter(op.responseType)}>;\n`;
                    }
                )
            })
            if (calls) {
                code += `  public ${mtd.toLowerCase()}(path: ${avaliablePath}${mtd}, params?: OvhParamType): Promise<any> {\n`;
                code += `    return super.${mtd.toLowerCase()}(path, params);\n`
                code += `  }\n`
            }
        }
        code += `}\n`
        return code;
    }

    /**
    * @param depth 
    * @param api 
    * @param code 
    */
    dumpApiHarmony(depth: number, api: CacheApi, code: string): string {
        let ident0 = indentGen(depth - 1);
        // drop _ prefixed fields
        const keys = Object.keys(api).filter(k => !k.startsWith('_'))

        //if (api._api)
        //    code += `${ident0}/**\n${ident0} * Path:${api._api.path}\n${ident0} * ${api._api.description}\n${ident0} */\n`;
        let EOB = '';
        if (api._path) {
            EOB = `${ident0}}\n`
            let last = api._path.split('/').pop();
            if (last && depth > 1) {
                if (last.startsWith('{')) {
                    //code += `${ident0}/** ${last} */ \n`;
                    code += `${ident0}[keys: string]:`;
                    EOB = `${ident0}} | any\n`
                } else {
                    code += `${ident0}${protectFieldName(last)}: `;
                }
            } else {
                code += `${ident0}// path ${api._path}\n`;
                code += `${ident0}export interface ${className(api._path)}`;
            }
            code += ` {\n`;
        }

        let ident = indentGen(depth);
        if (api._api) {
            for (const op of api._api.operations.sort((a,b) => a.httpMethod.localeCompare(b.httpMethod))) {
                // code += `${ident}/**\n${ident} * ${op.description}\n${ident} */\n`;
                code += `${ident}// ${op.httpMethod} ${api._path}\n`;

                code += `${ident}$${op.httpMethod.toLowerCase()}(`;
                let params: Parameter[] = [];
                if (op.httpMethod == 'GET') {
                    params = op.parameters.filter(p => p.paramType === 'query')
                    if (params.length)
                        code += 'param?: {'
                } else {
                    params = op.parameters.filter(p => p.paramType === 'body').sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                    if (params.length)
                        code += 'body?: {'
                }
                params = params.sort((a,b) => (<string>a.name).localeCompare(<string>b.name))
                let array = params.map(param => {
                    let text = protectJsonKey(String(param.name || 'body'));
                    if (!param.required)
                        text += "?";
                    return `${text}: ${this.fullTypeExp(param)}`;
                })
                code += array.join(', ');
                if (params.length)
                    code += '}'
                code += `): `;
                let retType = op.responseFullType;
                if (!retType)
                    retType = op.responseType;
                retType = this.aliasFilter(retType);
                code += `Promise<${retType}>;\n`; // DedicatedServerCatalog
            }
        }

        for (const k of keys.sort()) {
            const value: any = api[k];
            // API | string | CacheApi | undefined
            // console.log(indent(depth), value._path, value);
            if (value['_path']) {
                code = this.dumpApiHarmony(depth + 1, value, code);
            } else {
                console.log('Done ', keys);
            }
        }
        code += EOB;
        return code;
    }
}
