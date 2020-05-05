import Bluebird from "bluebird";
import debounce from 'debounce';
import { myDebounce } from "./myDebounce";

/**
 * dirty testing
 */
async function test() {
    let calls = 0;
    let total = 0;
    let display = 0;
    const doLog = false;

    const bnc =(drops?: number) => {
        drops = drops || 0;
        total += drops + 1;
        display++;
        if (doLog)
            console.log(`display:${display}/${total} drops:${drops}`);
    }

    let d: () => void;

    // FINAL display:3/3 calls:25
    d = debounce(bnc, 1000, true);
    // FINAL display:7/25 calls:25
    d = myDebounce(bnc, 1000, false);
    // FINAL display:7/25 calls:25
    d = myDebounce(bnc, 1000, true);

    const f = () => {
        calls++;
        d();
    }
    f();
    console.log('P1');
    await Bluebird.delay(100);
    f();
    f();
    await Bluebird.delay(100);
    console.log('P2');
    await Bluebird.delay(1100);

    console.log('P3');
    f();
    for (let i=0; i< 20; i++) {
        f();
        await Bluebird.delay(250);
    }
    console.log('P4');
    await Bluebird.delay(1100);
    f();
    await Bluebird.delay(1100);
    console.log(`FINAL display:${display}/${total} calls:${calls}`);
}

test();