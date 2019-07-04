import GenApiTypes, { CacheApi, CacheModel, filterReservedKw } from './GenApiTypes';
import { indentGen, protectFieldName, className, protectJsonKey, rawRemapNode } from './utils';
import { Parameter } from './schema';

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
        await this.gen.loadSchema(`${this.api}.json`)
        // start generation
        // Add extra ROOT NameSpace
        let code = `export namespace ${this.extraNS.replace('.', '')} {\n`;
        code = this.dumpModel(0, this.gen.models, code, '');
        code += this.dumpApi(0, this.gen.apis, '// Apis\n');
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
                code += `${ident0}export interface ${name}${generic} { /* L:255 */\n`;
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
                    code += '; /* L:271 */ \n';
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
                code += `${ident0}export namespace ${filterReservedKw(cache._namespace)} {/* L:283 */\n`;
            } else if (cache._name) {
                code += `${ident0}export namespace ${cache._name} { /* L:285 */\n`;
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

    /**
    * @param depth 
    * @param api 
    * @param code 
    */
    dumpApi(depth: number, api: CacheApi, code: string): string {
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
                    code += `${ident0}${protectFieldName(last)}: /* L:165 */`;
                }
            } else {
                code += `${ident0}// path ${api._path} /* L:168 */ \n`;
                code += `${ident0}export interface ${className(api._path)} /* L:169*/`;
            }
            code += ` {\n`;
        }

        let ident = indentGen(depth);
        if (api._api) {
            for (const op of api._api.operations) {
                // code += `${ident}/**\n${ident} * ${op.description}\n${ident} */\n`;
                code += `${ident}// ${op.httpMethod} ${api._path}\n`;

                code += `${ident}${op.httpMethod}(`;
                let params: Parameter[] = [];
                if (op.httpMethod == 'GET') {
                    params = op.parameters.filter(p => p.paramType === 'query')
                    if (params.length)
                        code += 'param?: {'
                } else {
                    params = op.parameters.filter(p => p.paramType === 'body')
                    if (params.length)
                        code += 'body?: {'
                }
                for (let i = 0; i < params.length; i++) {
                    const param = params[i];
                    if (i > 0)
                        code += ', ';
                    code += protectJsonKey(String(param.name || 'body'));
                    if (!param.required)
                        code += "?";
                    code += ": ";
                    code += this.fullTypeExp(param);
                }
                if (params.length)
                    code += '}'
                code += `): `;
                let retType = op.responseFullType;
                if (!retType)
                    retType = op.responseType;
                retType = this.aliasFilter(retType);
                code += `${retType};/* L208 */\n`; // DedicatedServerCatalog
            }
        }

        for (const k of keys) {
            const value: any = api[k];
            // API | string | CacheApi | undefined
            // console.log(indent(depth), value._path, value);
            if (value['_path']) {
                code = this.dumpApi(depth + 1, value, code);
            } else {
                console.log('Done ', keys);
            }
        }
        code += EOB;
        return code;
    }
}
