import test from 'ava';
import { wait } from './helper.js';

test('test delay', async (t) => {
    let time = Date.now();
    await wait(50);
    time = Date.now() - time;
    t.assert(time >= 50, 'more than 50 ms pass');
})