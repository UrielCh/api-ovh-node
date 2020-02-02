import fs from 'fs';
import path from 'path';
import { EOL } from 'os';

const root = path.join(__dirname, '..', '..', '..');

const subs = [
    { dir: 'packages-eu', name: 'ovh', country: 'Europe' },
    { dir: 'packages-ca', name: 'ovh', country: 'Canada' },
    { dir: 'packages-us', name: 'ovh', country: 'USA' },
    { dir: 'soyoustart-eu', name: 'so you start', country: 'Europe' },
    { dir: 'soyoustart-ca', name: 'so you start', country: 'Canada' },
    { dir: 'kimsufi-eu', name: 'kimsufi', country: 'Europe' },
    { dir: 'kimsufi-ca', name: 'kimsufi', country: 'Canada' },
]

for (const { dir, name: nsName, country } of subs) {
    console.log(`\n### Packages for API ${nsName} in ${country}${EOL}`);
    const subPath = path.join(root, dir);
    const pkgs = fs.readdirSync(subPath);
    for (const name2 of pkgs) {
        const jsonFile = path.join(subPath, name2, 'package.json');
        try {
            let content = fs.readFileSync(jsonFile, { encoding: 'utf8' });
            const data = JSON.parse(content);
            const { name, description } = data;
            console.log(`* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/${name2}.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/${name2}) *Api ${name}* ${description}`);
            if (true) {
                data.files = ["index.js", "index.d.ts"]; // , "index.ts" 
                data.scripts.prepare = "npm run build";
                data.dependencies["@ovh-api/common"] = "^3.0.1";
                content = JSON.stringify(data, undefined, 4) + EOL;
                fs.writeFileSync(jsonFile, content, { encoding: 'utf8' });
            }
        } catch (e) {
        }
    }
}
