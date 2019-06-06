import GenApiTypes, { CacheApi, CacheModel } from './src'
import { Parameter } from './src/schema';
import fse from 'fs-extra'

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
}
function mapNode(type: string): string {
    if (type == null)
        return '';
    let p = type.indexOf(":");
    if (p > 0) {
        type = type.substring(p + 1);
    }
    return rawRemapNode[type] || '';
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

function fullTypeExp(param: Parameter) {
    // final String prefix = data.getNodeProject();
    let full = param.fullType;
    let tmp = mapNode(full);
    if (tmp) {
        return tmp;
    }
    if (full == null) {
        full = param.dataType;
    }
    //let typename = 'data.toNodeType(' + full + ')';
    let typename = full;
    //if (isblackListed(typename)) {
    //    OvhApiModel model = data.models.get(full);
    //    genEnum(model, sb);
    //    return;
    //}
    if (gen.alias[typename])
        return gen.alias[typename];
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
                code += `${ident0}${last}:`;
            }
        } else {
            code += `${ident0}export interface ${className(api._path)}`;
        }
        code += ` {\n`;
    }

    let ident = indentGen(depth);
    if (api._api) {
        for (const op of api._api.operations) {
            // code += `${ident}/**\n${ident} * ${op.description}\n${ident} */\n`;
            code += `${ident}${op.httpMethod}(`;
            // let p1 = op.parameters.filter(p=>p.dataType == 'path')
            let params: Parameter[] = [];
            if (op.httpMethod == 'GET') {
                params = op.parameters.filter(p => p.paramType === 'query')
            } else {
                params = op.parameters.filter(p => p.paramType === 'body')
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
            if (op.httpMethod != 'GET') {
                code += '}'
            }
            code += `): `;
            let retType = op.responseFullType;
            if (!retType)
                retType = mapNode(op.responseType);
            if (!retType)
                retType = op.responseType;

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
    if (cache._model) {
        const model = cache._model
        const name = model.id;
        let generic = ''
        if (model.generics) {
            generic = `<${model.generics.join(", ")}>`
        }
        // code += `${ident0}/**\n${ident0} * id:${model.id}\n${ident0} * ${model.description}\n${ident0} */\n`;
        code += `${ident0}//${fullNS}\n`;
        if (model.enum) {
            if (model.enumType === 'long')
                code += `${ident0}export type ${name} = ${model.enum.join(' | ')}\n`;
            else
                code += `${ident0}export type ${name} = "${model.enum.join('" | "')}"\n`;
        } else if (model.properties) {
            let props = Object.keys(model.properties).sort();
            code += `${ident0}export interface ${name}${generic} {\n`;
            for (const pName of props) {
                const prop = model.properties[pName];
                // console.log(prop);
                code += `${ident0}    ${pName}`;
                if (!prop.required)
                    code += '?';
                code += ': ';
                let type = prop.fullType || prop.type;
                if (type.endsWith(':string'))
                    type = 'string'
                if (rawRemapNode[type])
                    type = rawRemapNode[type]
                if (gen.alias[type])
                    type = gen.alias[type];
                if (~type.indexOf('.'))
                    type = extraNS + type;
                //const fullNS = model.namespace;
                //if (type.startsWith(fullNS)) {
                //    let tmp = type.substr(fullNS.length + 1)
                //    if (!~tmp.indexOf('.'))
                //        type = tmp;
                //}
                type = type.replace('<long>', '<number>');
                code += type;
                code += ';\n';
            }
            code += `${ident0}}\n`;
        }
    }
    {
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
            if (cache['order'] && !fullNS) {
                console.log(fns + ' in Order ' + Object.keys(<CacheModel>cache['order']));
            }
            code = dumpModel(depth + 1, <CacheModel>cache[ns], code, fns);
        }
        if (cache._namespace || cache._name)
            code += `${ident0}}\n`;
    }
    return code;
}
async function main() {
    /** @type {Schema>}*/
    //  await gen.loadSchemas('/services.json')
    let api = 'me';
    extraNS = `OVHme.`;
    await gen.loadSchemas(`/${api}.json`)
    let code = `export namespace ${extraNS.replace('.', '')} {\n`;
    code = dumpModel(0, gen.models, code, '');
    code += dumpApi(0, gen.apis, '// Apis\n');
    code += '}';
    await fse.writeFile(`${api}.ts`, code);
}

main().then(() => console.log);