import GenApiTypes, { CacheApi, CacheModel, filterReservedKw } from './GenApiTypes';
import { indentGen, protectModelField, className, protectJsonKey, rawRemapNode, formatUpperCamlCase, protectHarmonyField } from './utils';
import { Parameter, Schema, FieldProp, API } from './schema';


let commonNSColision: { [key: string]: string } = {
    'order.Price': 'orderPrice',
    'zone.NamedResolutionFieldTypeEnum': 'zoneNamedResolutionFieldTypeEnum',
    'domain.DomainStatusEnum': 'domainDomainStatusEnum',
    'domain.DomainMlLanguageEnum': 'domainDomainMlLanguageEnum',
    'domain.DomainMlOptionsStruct': 'domainDomainMlOptionsStruct',
    'domain.DomainFilterActionEnum': 'domainDomainFilterActionEnum',
    'domain.DomainFilterOperandEnum': 'domainDomainFilterOperandEnum',
    'domain.DomainSpecialAccountActionEnum': 'domainDomainSpecialAccountActionEnum',
    'domain.DomainPopActionEnum': 'domainDomainPopActionEnum',
    'domain.DomainSpecialAccountTypeEnum': 'domainDomainSpecialAccountTypeEnum',
    'zone.RedirectionTypeEnum': 'zoneRedirectionTypeEnum',
    'xdsl.DslTypeEnum': 'xdslDslTypeEnum',
    'xdsl.eligibility.Address': 'xdsleligibilityAddress',
    'xdsl.eligibility.BookMeetingSlot': 'xdsleligibilityBookMeetingSlot',
    'xdsl.eligibility.LandlineStatusEnum': 'xdsleligibilityLandlineStatusEnum',
    'xdsl.DeconsolidationEnum': 'xdslDeconsolidationEnum',
    'xdsl.LineSectionLength': 'xdslLineSectionLength',
    'xdsl.eligibility.Portability': 'xdsleligibilityPortability',
    'xdsl.eligibility.MeetingSlots': 'xdsleligibilityMeetingSlots',
    'xdsl.eligibility.ProviderEnum': 'xdsleligibilityProviderEnum',
    'email.pro.ObjectStateEnum': 'emailproObjectStateEnum',
    'veeamEnterprise.TaskStateEnum': 'veeamEnterpriseTaskStateEnum',
    'telephony.ProtocolEnum': 'telephonyProtocolEnum',
}

export class CodeGenerator {
    api: string;
    gen: GenApiTypes;
    schema?: Schema;
    NSCollision = new Set<string>();

    constructor(api: string) {
        this.api = api;
        this.gen = new GenApiTypes();

    }

    async generate(): Promise<string> {
        this.schema = await this.gen.loadSchema(`${this.api}.json`)
        // start generation
        // Add extra ROOT NameSpace
        //let code = `import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';\n\n/**\n * START API ${this.api} Models\n */\n`;
        let code = `import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';\n\n/**\n * START API ${this.api} Models\n */\n`;


        code = this.dumpModel(0, this.gen.models, code, '');
        //code += this.GenAllPathSet();
        code += `\n/**\n * END API ${this.api} Models\n */\n`;

        let proxyCall = 'proxy' + formatUpperCamlCase(this.api.replace(/\//g, '_'));

        let c1 = this.api.split('/')[1];
        let mainClass = className(c1) // formatUpperCamlCase("Api_" + this.api.replace(/\//g, '_'));

        //        code += `export function ${proxyCall}(ovhEngine: OvhRequestable): ${mainClass} {\n    return buildOvhProxy(ovhEngine, '${this.api}');\n}\n`
        code += `export function ${proxyCall}(ovhEngine: OvhRequestable): ${mainClass} {\n    return buildOvhProxy(ovhEngine, '/${c1}');\n}\n`
        code += `export default ${proxyCall};\n`

        code += `/**\n * Api Proxy model\n */`
        code += this.dumpApiHarmony(0, this.gen.apis, '// Apis harmony\n');
        code += `/**\n * classic Model\n */`
        // extra alias fo bypass namespace colision errors
        for (let type of this.NSCollision) {
            code += `type ${commonNSColision[type]} = ${type};\n`
        }

        return code;
    }

    typeFromParameter(p: Parameter | FieldProp): string {
        let type = p.fullType || (<any>p).type;
        if (type.endsWith(':string'))
            type = 'string'

        type = this.aliasFilter(type);

        type = type.replace('<long>', '<number>');
        // deal with namespace colision
        {
            let rawType = type;
            let isArray = false;
            if (type.endsWith("[]")) {
                rawType = type.substring(0, type.length - 2);
                isArray = true;
            }

            //if (~rawType.indexOf('.')) {
            //    if (!commonNSColision[rawType])
            //        commonNSColision[rawType] = formatUpperCamlCase(rawType);
            //}
            let colistion = commonNSColision[rawType];
            if (colistion) {
                this.NSCollision.add(rawType);
                if (isArray)
                    type = colistion + '[]';
                else
                    type = colistion;
            }
        }
        return filterReservedKw(type);
    }

    reservedField = new Set(['_alias', '_model', '_name', '__propo__', '_namespace'])

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
                    code += `${ident0}    ${protectModelField(pName)}`;
                    if (!prop.required && prop.canBeNull)
                        code += '?';
                    code += ': ' + this.typeFromParameter(prop);
                    code += ';\n';
                }
                code += `${ident0}}\n`;
            }
        }
        {
            // drop _alias _model _name __propo__
            const keys = Object.keys(cache).filter(k => !this.reservedField.has(k)).sort();
            if (!keys.length)
                return code;
            if (cache._namespace) {
                // code += `${ident0}// ${JSON.stringify(keys)}\n`;
                code += `${ident0}export namespace ${filterReservedKw(cache._namespace)} {\n`; //  //  ${keys.join(', ')}
            } else if (cache._name) {
                code += `${ident0}export namespace ${cache._name} {\n`; //  //  ${keys.join(', ')}
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

    aliasFilter(type: string): string {
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
     * deprecated
     */
    GenAllPathSet() {
        let code = '';
        let avaliablePath = formatUpperCamlCase("Paths_" + this.api.replace(/\//g, '_'))
        // let mainClass = formatUpperCamlCase("Api_" + this.api.replace(/\//g, '_'));
        let indexApi = { GET: [], PUT: [], POST: [], DELETE: [] };
        (<Schema>this.schema).apis.forEach(
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
        return code;
    }

    /**
     * Interface flat
     * @param schema flag Call models
     * @param api 
     * @param code 
     */
    dumpApi(schema: Schema, api: CacheApi, code: string): string {
        for (let mtd of ['GET', 'PUT', 'POST', 'DELETE']) {
            let calls = 0;
            schema.apis.sort((a, b) => a.path.localeCompare(b.path)).forEach(api => {
                api.operations.filter(op => op.httpMethod === mtd).forEach(
                    op => {
                        calls++;
                        code += '  /**\n';
                        code += `   * ${api.description}\n`;
                        code += `   * ${op.description}\n`;
                        code += '   */\n';
                        code += `  ${mtd.toLowerCase()}(path: '${api.path}'): (`;
                        let done = new Set();
                        let params = [];
                        let mandatoryParams = 0;
                        params.push(...op.parameters.filter(p => p.paramType == 'path').map(p => { done.add(p.name); return `${p.name}: ${this.typeFromParameter(p)}` }).sort())
                        mandatoryParams += params.length;
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
                                    else
                                        mandatoryParams++;
                                    param += ': ' + this.typeFromParameter(p);
                                    params.push(param)
                                }
                            } else {
                                console.log('ERORROOROR L 270');
                                //params.push('body: any')
                            }
                        } else {
                            body.sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                            params.push(...body.map(p => {
                                if (done.has(p.name))
                                    return;
                                let param = `${protectJsonKey(p.name || '')}`;
                                if (!p.required)
                                    param += '?'
                                else
                                    mandatoryParams++;
                                param += ': ' + this.typeFromParameter(p);
                                return param;
                            }))
                        }
                        if (params.length) {
                            code += 'params';
                            if (mandatoryParams == 0)
                                code += '?';
                            code += `: {${params.join(', ')}}`;
                        }
                        // typename = this.aliasFilter(typename);
                        code += `) => Promise<${this.aliasFilter(op.responseType)}>;\n`;
                    }
                )
            })
        }
        return code;
    }

    /**
     * interface Proxy
     * 
    * @param depth 
    * @param api 
    * @param code 
    */
    dumpApiHarmony(depth: number, api: CacheApi, code: string): string {
        let ident0 = indentGen(depth - 1);
        // drop _ prefixed fields
        const keys = Object.keys(api).filter(k => !k.startsWith('_'))

        let EOB = '';
        if (api._path) {
            EOB = `${ident0}}\n`
            let last = api._path.split('/').pop();
            if (last && depth > 1) {
                if (last.startsWith('{')) {
                    let m = last.match(/\{([^}]+)\}/);
                    let name = m ? m[1] : 'id';
                    let pType = 'string | number';
                    try {
                        let _api = (<API>api._api);
                        let _op = _api.operations[0];
                        let _params = _op.parameters;
                        let _param = _params.filter(p => p.name == name)[0];
                        pType = _param.dataType;
                        pType = this.aliasFilter(pType);
                    } catch {
                    }
                    //code += `${ident0}[keys: string]:`;
                    code += `${ident0}$(${name}: ${pType}): `;
                    EOB = `${ident0}};\n` //  | any
                } else {
                    code += `${ident0}${protectHarmonyField(last)}: `; //  /* 260 */
                }
            } else {
                code += `${ident0}// path ${api._path}\n`;
                code += `${ident0}export interface ${className(api._path)}`;
            }
            code += `{\n`;
        }

        let ident = indentGen(depth);
        if (api._api) {
            for (const op of api._api.operations.sort((a, b) => a.httpMethod.localeCompare(b.httpMethod))) {
                let done = new Set();
                let mandatoryParams = 0;
                let params: Parameter[] = [];

                // code += `${ident}/**\n${ident} * ${op.description}\n${ident} */\n`;
                code += `${ident}// ${op.httpMethod} ${api._path}\n`;

                code += `${ident}$${op.httpMethod.toLowerCase()}(`;
                if (op.httpMethod == 'GET') {
                    params = op.parameters.filter(p => p.paramType === 'query')
                    if (params.length)
                        code += 'param?: {'
                } else {
                    params = op.parameters.filter(p => p.paramType === 'body').sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                    if (params.length)
                        code += 'body?: {'
                }
                params = params.sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                let array: string[] = [];
                if (params.length == 1 && params[0].name == null) {
                    // console.log(body[0]);
                    let modelsProp = (<Schema>this.schema).models[params[0].fullType];

                    if (!modelsProp || !modelsProp.properties)
                        console.error(`ERROR in model Body Type ${params[0].fullType} do not exists`)
                    else
                        for (let propName of Object.keys(modelsProp.properties).sort()) {
                            let p = modelsProp.properties[propName];
                            if (done.has(propName))
                                continue;
                            let param = `${protectJsonKey(propName)}`;
                            if (!p.required)
                                param += '?'
                            else
                                mandatoryParams++;
                            param += ': ' + this.typeFromParameter(p);
                            //code += param;
                            array.push(param)
                        }

                } else {
                    array = params.map(param => {
                        let text = protectJsonKey(String(param.name || 'body'));
                        if (!param.required)
                            text += "?";
                        return `${text}: ${this.fullTypeExp(param)}`;
                    })
                }
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


        if (depth === 1)
            code += this.dumpApi(<Schema>this.schema, this.gen.apis, '// Api\n');

        code += EOB;
        return code;
    }
}
