import { endpoints } from './endpoints';
import { RegionGenerator } from './RegionGenerator';

async function main() {
    let error = 0;
    for (const endpoint of Object.values(endpoints)) {
        const regionGen = new RegionGenerator(endpoint);
        //if (endpoint.directory != 'kimsufi-ca')
        //    continue;
        try {
            await regionGen.genRegion();
            if (regionGen.deletedApi) {
                console.log(`${regionGen.deletedApi} API deleted`);
            }
        } catch (e) {
            console.error(`Fail to gen ${endpoint.host} API`, e)
            error++;
        }
    }
    if (error) {
        console.log(`${error} Generation error abort.`);
        process.exit(-1);
    }
    console.log(`All generation Done`);
}

main().then(() => console.log);