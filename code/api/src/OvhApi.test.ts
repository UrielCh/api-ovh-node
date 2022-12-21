import test from 'ava';
import OvhApi from './OvhApi.js';
import { OvhError } from './OvhError.js';
import { OvhParamsFull } from './OvhParams.js';

const accessRules = ['GET /*', 'POST /me/agreements/0/accept', 'GET /domain', 'GET /domain/*', 'POST /domain/zone/*/record', 'DELETE /domain/zone/*/record/*'];
const apiOptions: Partial<OvhParamsFull> = { certCacheFile: '../test-cert.json', accessRules };

test('Get Time from OVH', async (t) => {
    const engine = new OvhApi(apiOptions);
    const time = await engine.request('GET', '/auth/time');
    t.assert(typeof time === 'number', 'time return a number');
})

test('list service', async (t) => {
    t.timeout(30000);
    const engine = new OvhApi(apiOptions);
    const services: number[] = await engine.request('GET', '/service/');
    t.assert(Array.isArray(services), 'return an Array');
    if (services.length) {
        t.assert(Number.isInteger(services[0]), 'return an Array of number');
    }
})

test('agee agreements 404', async (t) => {
    const engine = new OvhApi({ ...apiOptions, accessRules: accessRules });
    try {
        await engine.doRequest('POST', '/me/agreements/0/acceptAccept', '/me/agreements/*/acceptAccept');
        t.fail('should get 404');
    } catch (e) {
        const error = e as OvhError;
        t.assert(error.httpCode.includes('404'), 'is en ovh 404');
    }
})

test('play with domains', async (t) => {
    const engine = new OvhApi({ ...apiOptions, accessRules: accessRules });
    let domains = await engine.request<string[]>('GET', '/domain');
    domains = domains.filter(a => a.endsWith(".ovh"));
    const zoneName = domains[0];
    // const ids = number[] = await engine.doRequest('GET', `/domain/zone/${zoneName}/record`, `/domain/zone/*/record`);

    const olsIds: number[] = await engine.doRequest('GET', `/domain/zone/${zoneName}/record`, `/domain/zone/*/record`, { fieldType: 'TXT', subDomain: 'foo' });
    if (olsIds.length) {
        await engine.doRequest('DELETE', `/domain/zone/${zoneName}/record/${olsIds[0]}`, `/domain/zone/*/record/*`);
    }

    try {
        await engine.doRequest('POST', `/domain/zone/${zoneName}/record`, `/domain/zone/*/record`, { fieldType: 'A', subDomain: 'foo2', target: 'bar' });
        t.fail('should throw invalid ipv4');
    } catch (e) {
        const error = e as OvhError;
        t.assert(error.path === `/domain/zone/${zoneName}/record`, `path shoud be present in error`);
        t.assert(error.errorCode === 'HTTP_ERROR', `errorCode should be HTTP_ERROR, GET "${error.errorCode}"`);
        t.assert(error.httpCode === '400 Bad Request', `httpCode should be 400 Bad Request, GET "${error.httpCode}"`);
        t.assert(error.message.includes('Invalid IPv4'), 'Error should be Invalid IPv4')
    }

    const { id } = await engine.doRequest('POST', `/domain/zone/${zoneName}/record`, `/domain/zone/*/record`, { fieldType: 'TXT', subDomain: 'foo', target: 'bar' });
    t.assert(typeof id === 'number', 'get id from record');
    const savedZone = await engine.doRequest('GET', `/domain/zone/${zoneName}/record/${id}`, `/domain/zone/*/record/*`);
    t.assert(savedZone.id === id, 'get zone back');
    await engine.doRequest('DELETE', `/domain/zone/${zoneName}/record/${id}`, `/domain/zone/*/record/*`);
    t.pass('create TXT and delete it');
})
