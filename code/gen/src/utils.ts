
export function indentGen(depth: number): string {
    let s = '';
    if (depth <= 0)
        return s;
    while (depth--) {
        s += '    '
    }
    return s;
}
/**
 * use in data model
 * @param name 
 */
export const protectModelField = (name: string): string => {
    if (name.match(/^[0-9].*/)) {
        return `'${name}'`;
    }
    if (~name.indexOf('-'))
        return `'${name}'`;
    return name;
}
/**
 * use to generate harmony proxy path
 */
export const protectHarmonyField = (name: string): string => {
    if (name.match(/^[0-9].*/) || ~name.indexOf('-')) {
        return `'${name}'`;
    }
    return name;
}


// add package private ???
const needProtectMap: { [key: string]: boolean } = { 'default': true, 'function': true };

export function protectJsonKey(key: string): string {
    // keep .
    //if (key.includes('.')) key = key.replace('.', '_');
    if (~'0123456789'.indexOf(key[0]) || key.includes(".") || key.includes("-"))
        return "'" + key + "'";
    const needProtect = needProtectMap[key];
    if (needProtect)
        return key + '_';
    return key;
}

export function formatUpperCamlCase(name: string) {
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

export function formatLowerCamlCase(name: string) {
    let sb = '';
    let upper = false;
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

export function className(path: string): string {
    return formatUpperCamlCase(path.replace(/\//g, '_').replace(/[{}]/g, '_').replace(/[__]/g, '_'))
}
/**
 * TODO: add extra mapping to keep sementic mapping
 */
export const rawRemapNode: { [keys: string]: string } = {
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
    "internationalPhoneNumber": "string",
    "map[string]string": "{ [key: string]: string }"
}
