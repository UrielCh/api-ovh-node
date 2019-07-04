import { Parameter } from './schema';
import fse from 'fs-extra'
import Path from 'path'
import GenApiTypes, { CacheApi, CacheModel } from './GenApiTypes';

let gen = new GenApiTypes();
let extraNS = '';
// let alias: {[key: string]: string} = {};

function indentGen(depth: number): string {
    let s = '';
    if (depth <= 0)
        return s;
    while (depth--) {
        s += '    '
    }
    return s;
}

const protectFieldName = (name: string): string => {
    if (name.match(/^[0-9].*/)) {
        return `'${name}'`;
    }
    if (~name.indexOf('-'))
        return `'${name}'`;
    return name;
}

const filterReservedKw = (word: string): string => {
    // used in distributionimage
    word = word.replace(/package/g, 'pakage');
    // word = word.replace(/public/g, 'publik');
    // used in store
    //word = word.replace(/edit.response$/, 'editresponse');
    return word;
}

const rawRemapNode: { [keys: string]: string } = {
    "Number": "number",
    "long": "number",
    "double": "number",
    "boolean": "boolean",
    "text": "string",
    "ip": "string",
    "ipv4": "string",
    "ipv6": "string",
    "ipv6Block": "string",
    "string": "string",
    "string[]": "string[]",
    "uuid": "string",
    "macAddress": "string",
    "ipBlock": "string",
    "phoneNumber": "string",
    "ipv4Block": "string",
    "password": "string",
    "datetime": "string",
    "date": "string",
    "time": "string",
    "long[]": "number[]",
    "ipInterface": "string",
    "duration": "string",
}

function formatUpperCamlCase(name: string) {
    let sb = '';
    let upper = true;
    for (let i = 0; i < name.length; i++) {
        let c = name.charAt(i);
        if (c == '_' || c == '-') {
            upper = true;
            continue;
        }
        if (upper) {
            sb += c.toLocaleUpperCase();
            upper = false;
        } else
            sb += c;
    }
    return sb.toString();
}

function className(path: string): string {
    return formatUpperCamlCase(path.replace(/\//g, '_').replace(/[{}]/g, '_').replace(/[__]/g, '_'))
}
const needProtectMap: { [key: string]: boolean } = { 'default': true, 'function': true };

function protectJsonKey(key: string): string {
    key = key.replace('.', '_');
    if (~'0123456789'.indexOf(key[0]) | ~key.indexOf(".") | ~key.indexOf("-"))
        return "'" + key + "'";
    const needProtect = needProtectMap[key];
    if (needProtect)
        return key + '_';
    return key;
}

function aliasFilter(type: string) {
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
    if (gen.alias[rawType])
        rawType = gen.alias[rawType];

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

function fullTypeExp(param: Parameter) {
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
    typename = aliasFilter(typename);
    return typename;
}
/**
 * @param depth 
 * @param api 
 * @param code 
 */
function dumpApi(depth: number, api: CacheApi, code: string): string {
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
                code += `${ident0}${protectFieldName(last)}: /* L165 */`;
            }
        } else {
            code += `${ident0}// path ${api._path} /* L168 */ \n`;
            code += `${ident0}export interface ${className(api._path)}`;
        }
        code += ` {\n`;
    }

    let ident = indentGen(depth);
    if (api._api) {
        for (const op of api._api.operations) {
            // code += `${ident}/**\n${ident} * ${op.description}\n${ident} */\n`;
            code += `${ident}${op.httpMethod}(`;
            let params: Parameter[] = [];
            if (op.httpMethod == 'GET') {
                //if (api._api.path == '/cloud/subsidiaryPrice')
                //    console.log('GETTTTTTTTT ' + api._api.path);
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
                code += fullTypeExp(param);
            }
            if (params.length)
                code += '}'
            code += `): `;
            let retType = op.responseFullType;
            if (!retType)
                retType = op.responseType;
            retType = aliasFilter(retType);
            code += `${retType};\n`;
        }
    }

    for (const k of keys) {
        const value: any = api[k];
        // API | string | CacheApi | undefined
        // console.log(indent(depth), value._path, value);
        if (value['_path']) {
            code = dumpApi(depth + 1, value, code);
        } else {
            console.log('Done ', keys);
        }
    }
    code += EOB;
    return code;
}

/**
 * @param depth 
 * @param api 
 * @param code 
 */
function dumpModel(depth: number, cache: CacheModel, code: string, fullNS: string): string {
    let ident0 = indentGen(depth - 1);

    if ((<any>cache)._DEBUG) {
        console.log('DEBUUGG');
    }

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
                type = aliasFilter(type);
                if (~type.indexOf('.'))
                    type = extraNS + type;
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
            code += `${ident0}export namespace ${cache._namespace} {\n`;
        } else if (cache._name) {
            code += `${ident0}export namespace ${cache._name} {\n`;
        }
        // drop _ prefixed fields
        // fullNS = fullNS ? fullNS + '.' + cache._name : cache._name;
        //console.log(ns['order']);
        for (const ns of keys) {
            let fns = fullNS ? `${fullNS}.${ns}` : ns;
            code = dumpModel(depth + 1, <CacheModel>cache[ns], code, fns);
        }
        if (cache._namespace || cache._name)
            code += `${ident0}}\n`;
    }
    return code;
}
async function main() {
    let apis = await gen.listSchemas()
    // ['/me', '/domain']
    // await fse.mkdir('dist');

    // debug gen a single API
    if (false)
        apis = apis.filter((api) => {
            if ('/price' == api)
                return true;
            if ('/order' == api)
                return true;
            if ('/distribution/image' == api)
                return true;
            return false;
        })

    for (const api of apis) {
        let flat = api.replace(/\//g, '');
        gen = new GenApiTypes();
        extraNS = `OVH${flat}.`;
        await gen.loadSchema(`${api}.json`)
        // start generation
        // Add extra ROOT NameSpace
        let code = `export namespace ${extraNS.replace('.', '')} {\n`;

        code = dumpModel(0, gen.models, code, '');
        code += dumpApi(0, gen.apis, '// Apis\n');
        code += '}';
        console.log(`saving dist${Path.sep}${flat}.ts`);
        await fse.writeFile(`dist${Path.sep}${flat}.ts`, code);
    }
}

main().then(() => console.log);