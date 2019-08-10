import GenApiTypes, { CacheApi, CacheModel, filterReservedKw } from './GenApiTypes';
import { indentGen, protectModelField, className, protectJsonKey, rawRemapNode, formatUpperCamlCase, protectHarmonyField } from './utils';
import { Parameter, Schema, FieldProp, API } from './schema';
import { EOL } from 'os';


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
    'payment.method.IntegrationType': 'paymentMethodIntegrationType',
}

export class CodeGenerator {
    api: string;
    gen: GenApiTypes;
    schema?: Schema;
    NSCollision = new Set<string>();
    // allFullTypes = [] as string[];
    // allFullInterface = [] as string[];

    constructor(api: string) {
        this.api = api;
        this.gen = new GenApiTypes();
    }

    async generate(): Promise<string> {
        this.schema = await this.gen.loadSchema(`${this.api}.json`)
        // start generation
        // Add extra ROOT NameSpace
        //let code = `import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';${EOL}${EOL}/**${EOL} * START API ${this.api} Models${EOL} */${EOL}`;
        let code = `import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';${EOL}${EOL}/**${EOL} * START API ${this.api} Models${EOL} */${EOL}`;

        /*
        let models = Object.keys(this.schema.models).sort((a, b) => a.length - b.length)
        console.log(models);
        for (let i = 0; i < models.length; i++)
            for (let j = (i + 1); j < models.length; j++) {
                let type = models[i];
                let tested = models[j];
                if (tested.endsWith(type)) {
                    commonNSColision[type] = type.replace(/\./g, '');
                    console.log(`colison ${tested} endWith ${type} => ${commonNSColision[type]}`)
                }
            }
        */

        code = this.dumpModel(0, this.gen.models, code, '');

        // look for colition
        // this.allFullTypes.sort((a, b) => a.length - b.length)
        // console.log(this.allFullTypes);


        //code += this.GenAllPathSet();
        code += `${EOL}/**${EOL} * END API ${this.api} Models${EOL} */${EOL}`;

        let proxyCall = 'proxy' + formatUpperCamlCase(this.api.replace(/\//g, '_'));

        let c1 = this.api.split('/')[1];
        let mainClass = className(c1) // formatUpperCamlCase("Api_" + this.api.replace(/\//g, '_'));

        //        code += `export function ${proxyCall}(ovhEngine: OvhRequestable): ${mainClass} {${EOL}    return buildOvhProxy(ovhEngine, '${this.api}');${EOL}}${EOL}`
        code += `export function ${proxyCall}(ovhEngine: OvhRequestable): ${mainClass} {${EOL}    return buildOvhProxy(ovhEngine, '/${c1}');${EOL}}${EOL}`
        code += `export default ${proxyCall};${EOL}`

        code += `/**${EOL} * Api Proxy model${EOL} */`
        code += this.dumpApiHarmony(0, this.gen.apis, `// Apis harmony${EOL}`);
        code += `/**${EOL} * classic Model${EOL} */`
        // extra alias fo bypass namespace colision errors
        for (let type of this.NSCollision) {
            code += `type ${commonNSColision[type]} = ${type};${EOL}`
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
            // code += `${ident0}/**${EOL}${ident0} * id:${model.id}${EOL}${ident0} * ${model.description}${EOL}${ident0} */${EOL}`;
            if (model.enum) {
                // this.allFullTypes.push(fullNS);
                code += `${ident0}// type fullname: ${fullNS}${EOL}`;
                if (model.enumType === 'long') // enum of number
                    code += `${ident0}export type ${name} = ${model.enum.join(' | ')}${EOL}`;
                else // enum of string
                    code += `${ident0}export type ${name} = "${model.enum.join('" | "')}"${EOL}`;
            } else if (model.properties) {
                code += `${ident0}// interface fullName: ${fullNS}.${name}${EOL}`;
                // this.allFullTypes.push(`${fullNS}.${name}`);
                let props = Object.keys(model.properties).sort();
                // this.allFullInterface.push(name);
                code += `${ident0}export interface ${name}${generic} {${EOL}`;
                for (const pName of props) {
                    const prop = model.properties[pName];
                    // console.log(prop);
                    code += `${ident0}    ${protectModelField(pName)}`;
                    if (!prop.required && prop.canBeNull)
                        code += '?';
                    code += ': ' + this.typeFromParameter(prop);
                    code += `;${EOL}`;
                }
                code += `${ident0}}${EOL}`;
            }
        }
        {
            // drop _alias _model _name __propo__
            const keys = Object.keys(cache).filter(k => !this.reservedField.has(k)).sort();
            if (!keys.length)
                return code;
            if (cache._namespace) {
                // code += `${ident0}// ${JSON.stringify(keys)}${EOL}`;
                code += `${ident0}export namespace ${filterReservedKw(cache._namespace)} {${EOL}`; //  //  ${keys.join(', ')}
            } else if (cache._name) {
                code += `${ident0}export namespace ${cache._name} {${EOL}`; //  //  ${keys.join(', ')}
            }
            // drop _ prefixed fields
            // fullNS = fullNS ? fullNS + '.' + cache._name : cache._name;
            //console.log(ns['order']);
            for (const ns of keys) {
                let fns = fullNS ? `${fullNS}.${ns}` : ns;
                code = this.dumpModel(depth + 1, <CacheModel>cache[ns], code, fns);
            }
            if (cache._namespace || cache._name)
                code += `${ident0}}${EOL}`;
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
            code += `type ${avaliablePath}${mtd} = ` + arr.sort().map((a: any) => `'${a}'`).join(` |${EOL}  `)
            code += `;${EOL}${EOL}`
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
            schema.apis.sort((a, b) => a.path.localeCompare(b.path)).forEach(api => {
                api.operations.filter(op => op.httpMethod === mtd).forEach(
                    op => {
                        code += `  /**${EOL}`;
                        code += `   * ${api.description}${EOL}`;
                        code += `   * ${op.description}${EOL}`;
                        code += `   */${EOL}`;

                        let done = new Set();
                        let params = [];
                        let mandatoryParams = 0;

                        code += `  ${mtd.toLowerCase()}(path: '${api.path}'): (`;
                        // only for flat model
                        let pathParam = op.parameters.filter(p => p.paramType == 'path').map(p => { done.add(p.name); return `${p.name}: ${this.typeFromParameter(p)}` }).sort();
                        mandatoryParams += pathParam.length;
                        params.push(...pathParam)
                        //
                        let paramType = (mtd == 'GET') ? 'query' : 'body';
                        let body = op.parameters.filter(p => p.paramType == paramType);
                        body = body.sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                        if (body.length == 1 && body[0].name == null) {
                            let modelsProp = (<Schema>this.schema).models[body[0].fullType];
                            if (!modelsProp || !modelsProp.properties)
                                console.error(`ERROR in model Body Type ${body[0].fullType} do not exists`)
                            else {
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
                            }
                        } else {
                            params.push(...body
                                .filter(p => !done.has(p.name))
                                .map(p => {
                                    const name = String(p.name);
                                    let text = protectJsonKey(name);
                                    if (!p.required)
                                        text += '?'
                                    else
                                        mandatoryParams++;
                                    return `${text}: ${this.typeFromParameter(p)}`;
                                }))
                        }
                        if (params.length) {
                            code += 'params';
                            if (mandatoryParams == 0)
                                code += '?';
                            code += `: {${params.join(', ')}}`;
                        }
                        // typename = this.aliasFilter(typename);
                        code += `) => Promise<${this.aliasFilter(op.responseType)}>;${EOL}`;
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
            EOB = `${ident0}}${EOL}`
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
                    EOB = `${ident0}};${EOL}` //  | any
                } else {
                    code += `${ident0}${protectHarmonyField(last)}: `; //  /* 260 */
                }
            } else {
                code += `${ident0}// path ${api._path}${EOL}`;
                code += `${ident0}export interface ${className(api._path)}`;
            }
            code += `{${EOL}`;
        }

        let ident = indentGen(depth);
        if (api._api) {
            for (const op of api._api.operations.sort((a, b) => a.httpMethod.localeCompare(b.httpMethod))) {
                code += `${ident}// ${op.httpMethod} ${api._path}${EOL}`;
                code += `${ident}$${op.httpMethod.toLowerCase()}(`;

                let done = new Set();
                let params: string[] = [];
                let mandatoryParams = 0;

                // no path param to handle in Poxymode
                //
                let paramType = (op.httpMethod == 'GET') ? 'query' : 'body';
                let body = op.parameters.filter(p => p.paramType === paramType)
                body = body.sort((a, b) => (<string>a.name).localeCompare(<string>b.name))
                if (body.length == 1 && body[0].name == null) {
                    let modelsProp = (<Schema>this.schema).models[body[0].fullType];
                    if (!modelsProp || !modelsProp.properties)
                        console.error(`ERROR in model Body Type ${body[0].fullType} do not exists`)
                    else {
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
                    }
                } else {
                    params.push(...body
                        // no filtrage dupalicate
                        .map(p => {
                            const name = String(p.name);
                            let text = protectJsonKey(name);
                            if (!p.required)
                                text += '?';
                            else
                                mandatoryParams++;
                            return `${text}: ${this.typeFromParameter(p)}`; // was fullTypeExp
                        }))
                }
                if (params.length) {
                    code += 'params';
                    if (mandatoryParams == 0)
                        code += '?';
                    code += `: {${params.join(', ')}}`
                }
                code += `): `;
                let retType = op.responseFullType;
                if (!retType)
                    retType = op.responseType;
                retType = this.aliasFilter(retType);
                code += `Promise<${retType}>;${EOL}`; // DedicatedServerCatalog
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
            code += this.dumpApi(<Schema>this.schema, this.gen.apis, `// Api${EOL}`);

        code += EOB;
        return code;
    }
}
