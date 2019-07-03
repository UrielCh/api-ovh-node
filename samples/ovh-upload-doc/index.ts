import Ovh from '@ovh-api/api';
import ApiMe from '@ovh-api/me';
import Promise from 'bluebird';
import { NichandleDocumentDocument } from '../../packages/me';
import fse from 'fs-extra';
import rp from 'request-promise'

const ovh = new Ovh({ accessRules: 'GET /me/document, POST /me/document,GET /me/document/*' });
const apiMe = new ApiMe(ovh);

async function main(documentName: string, filename: string) {
    let stat = fse.statSync(filename);
    if (!stat.isFile()) {
        throw `${filename} is not a file`
    }
    let docs = await apiMe.get("/me/document");
    let documents = await Promise.map(docs, id => apiMe.get('/me/document/{id}', { id }), { concurrency: 2 });
    let mappint: { [key: string]: NichandleDocumentDocument } = {};
    documents.forEach(doc => mappint[doc.name] = doc);
    console.log(`Available documents: ${Object.keys(mappint).join(',')}`);
    let selected = mappint[documentName];
    if (!selected) {
        console.log(`creating missing ${documentName} document`)
        selected = await apiMe.post('/me/document', { name: documentName })
    }
    console.log(selected);
    console.log('loading document data');
    let uploadData = fse.readFileSync(filename)
    console.log('uploading document content');
    let resp = await rp({ method: 'PUT', uri: selected.putUrl, body: uploadData });
    return 'All done'
}

if (process.argv.length != 4) {
    console.error('Upload a document to ovh document storage\nUsage: nodejs main documentName localFilePath')
} else {
    let documentName = process.argv[2]
    let filename = process.argv[3]
    console.log(`Uploading ${filename} as ${documentName}`)
    main(documentName, filename).then(console.log, console.error)
}